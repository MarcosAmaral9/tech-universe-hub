import { beforeEach, afterEach, describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, render, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StrictMode } from "react";
import { HISTORY_ASSETS, isHistorySnapshot } from "@/lib/historySnapshot";
import { useTopPosts } from "@/hooks/useTopPosts";
import GoogleAuthCallback from "@/pages/GoogleAuthCallback";

function completeSnapshot() {
  const assets = Object.fromEntries(Object.entries(HISTORY_ASSETS).map(([type, codes]) => [type,
    Object.fromEntries(codes.map(code => [code, Array.from({ length: type === "b3" ? 180 : 300 }, (_, index) => ({
      date: new Date(Date.UTC(2026, 0, index + 1)).toISOString().slice(0, 10), price: index + 1,
    }))])),
  ]));
  return { generatedAt: "2026-10-07T12:00:00Z", assets };
}

beforeEach(() => { localStorage.clear(); });
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });

describe("cópia completa do histórico", () => {
  it("aceita apenas os 24 ativos com séries reais suficientes", () => {
    const snapshot = completeSnapshot();
    expect(Object.values(snapshot.assets).flatMap(Object.keys)).toHaveLength(24);
    expect(isHistorySnapshot(snapshot)).toBe(true);
    delete snapshot.assets.b3.SUZB3;
    expect(isHistorySnapshot(snapshot)).toBe(false);
  });
  it("rejeita séries parciais e preços inválidos", () => {
    const snapshot = completeSnapshot();
    snapshot.assets.crypto.BTC = snapshot.assets.crypto.BTC.slice(0, 299);
    expect(isHistorySnapshot(snapshot)).toBe(false);
    const invalid = completeSnapshot();
    invalid.assets.metal.XAU[0].price = 0;
    expect(isHistorySnapshot(invalid)).toBe(false);
  });
});

describe("ranking semanal", () => {
  it("preserva o último ranking em erro 503 em vez de inventar uma semana vazia", async () => {
    const ranking = [{ slug: "artigo-real", title: "Artigo", category: "ia", views: 12 }];
    localStorage.setItem("vc_top_posts_week:4", JSON.stringify({ ts: 0, data: ranking }));
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: false, headers: new Headers({ "content-type": "application/json" }), json: async () => ({ error: "unavailable" }) }));
    const { result } = renderHook(() => useTopPosts("week", 4));
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.posts).toEqual(ranking);
    expect(result.current.error).toBe(true);
  });
  it("aceita uma semana realmente sem leituras sem reutilizar outro período", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({ ok: true, headers: new Headers({ "content-type": "application/json" }), json: async () => ({ posts: [] }) }));
    const { result } = renderHook(() => useTopPosts("week", 3));
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.posts).toEqual([]);
    expect(result.current.error).toBe(false);
  });
});

it("troca o código Google uma única vez sob StrictMode", async () => {
  const fetchMock = vi.fn().mockImplementation(() => new Promise(() => {}));
  vi.stubGlobal("fetch", fetchMock);
  render(<StrictMode><MemoryRouter initialEntries={["/auth/google?code=test-code&state=test-state"]}><GoogleAuthCallback /></MemoryRouter></StrictMode>);
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
  expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({ code: "test-code", state: "test-state", redirect_uri: "https://viciocode.com/auth/google" });
});