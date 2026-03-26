import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { trackArticleRead } from "@/hooks/useReadingHistory";
import BackNavigation from "@/components/BackNavigation";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import { ArrowLeft, Clock, User, Calendar, ShieldAlert, Eye, Mic, Lock } from "lucide-react";
import CategoryBadge from "@/components/CategoryBadge";
import CommentSection from "@/components/CommentSection";
import RelatedPosts from "@/components/RelatedPosts";
import heroImg from "@/assets/deepfakes-ia-2026.webp";

import { AdLeaderboard, AdRectangle } from "@/components/AdSense";
const DeepfakesIA2026 = () => {

  useEffect(() => {
    trackArticleRead("deepfakes-ia-2026-como-identificar", "Deepfakes e IA 2026: Como Identificar Conteúdo Falso e Proteger sua Imagem", "ia");
  }, []);
  return (
    <article className="container py-8 max-w-4xl mx-auto">
      <BackNavigation category="ia" />

      <header className="mb-8">
        <CategoryBadge category="ia" size="lg" />
        <h1 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-4">
          Deepfakes e IA em 2026: Como Identificar Conteúdo Falso e Proteger Sua Imagem
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
          <span className="flex items-center gap-2"><User className="h-4 w-4" />VICIO&lt;CODE&gt;</span>
          <span className="flex items-center gap-2"><Calendar className="h-4 w-4" />27 de Fevereiro, 2026</span>
          <span className="flex items-center gap-2"><Clock className="h-4 w-4" />12 min de leitura</span>
        </div>
        <ShareWhatsApp />
      </header>

      <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
        <img fetchpriority="high" src={heroImg} alt="Deepfakes e IA 2026" className="w-full h-full object-cover" />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="lead text-xl text-muted-foreground">
          Uma chamada de vídeo do seu banco pedindo confirmação de dados. Um áudio do seu chefe solicitando transferência urgente. Uma foto sua em um lugar onde você nunca esteve. Em 2026, esses cenários são <strong>ameaças reais e crescentes</strong>.
        </p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <ShieldAlert className="h-7 w-7 text-destructive" />
          A Escala do Problema
        </h2>
        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-card rounded-xl border border-destructive/30 text-center">
            <p className="text-2xl font-bold text-destructive mb-1">1.500%</p>
            <p className="text-sm text-muted-foreground mb-0">Crescimento de deepfakes (2022-2025)</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-destructive/30 text-center">
            <p className="text-2xl font-bold text-destructive mb-1">US$ 25 bi</p>
            <p className="text-sm text-muted-foreground mb-0">Prejuízos globais em 2025</p>
          </div>
          <div className="p-4 bg-card rounded-xl border border-destructive/30 text-center">
            <p className="text-2xl font-bold text-destructive mb-1">+340%</p>
            <p className="text-sm text-muted-foreground mb-0">Golpes com voz clonada no Brasil</p>
          </div>
        </div>

        <AdLeaderboard className="my-8" />

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Eye className="h-7 w-7 text-ia" />
          Como Identificar um Deepfake de Vídeo
        </h2>
        <ul className="space-y-2 my-6">
          <li>Piscadas de olho irregulares ou ausentes</li>
          <li>Bordas do rosto levemente borradas ao mover a cabeça</li>
          <li>Inconsistências na iluminação entre rosto e ambiente</li>
          <li>Dentes e cabelo com texturas artificiais</li>
          <li>Lábios dessincronizados com o áudio</li>
        </ul>
        <p><strong>Dica:</strong> Peça para a pessoa fazer algo imprevisível em tempo real — tocar o nariz, mostrar as mãos. Modelos de IA têm dificuldade com movimentos não ensaiados.</p>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Mic className="h-7 w-7 text-ia" />
          Como Identificar Voz Clonada
        </h2>
        <ul className="space-y-2 my-6">
          <li>Resposta emocional levemente atrasada</li>
          <li>Tom de voz que não varia naturalmente</li>
          <li>Ruídos de fundo artificialmente consistentes ou ausentes</li>
        </ul>
        <div className="my-6 p-6 bg-secondary/50 rounded-xl border border-border">
          <p className="mb-0">💡 <strong>Dica prática:</strong> Crie com sua família uma "palavra-código de segurança" que deve ser dita em qualquer pedido urgente de dinheiro ou informação sensível.</p>
        </div>

        <AdRectangle className="my-8" />

        <h2 className="text-2xl font-bold mt-10 mb-6">Ferramentas para Detectar Conteúdo Falso</h2>
        <ul className="space-y-2 my-6">
          <li><strong>Intel FakeCatcher:</strong> detecção em tempo real com 96% de precisão</li>
          <li><strong>Microsoft Video Authenticator:</strong> analisa vídeos frame a frame</li>
          <li><strong>Sensity AI:</strong> plataforma corporativa para detecção em escala</li>
          <li><strong>Hive Moderation:</strong> API para verificar imagens geradas por IA</li>
          <li><strong>Google SynthID:</strong> marca d'água invisível em conteúdo gerado pelo Gemini</li>
        </ul>

        <h2 className="flex items-center gap-3 text-2xl font-bold mt-10 mb-6">
          <Lock className="h-7 w-7 text-ia" />
          Como Proteger Sua Imagem e Voz
        </h2>
        <ul className="space-y-2 my-6">
          <li>Reduza exposição de voz online em redes públicas</li>
          <li>Ative autenticação de dois fatores em todas as contas</li>
          <li>Eduque familiares mais velhos sobre golpes</li>
          <li><strong>Desconfie de urgência:</strong> golpes sempre criam urgência artificial</li>
        </ul>

        <div className="mt-10 p-6 bg-secondary rounded-xl text-center">
          <h3 className="text-xl font-bold mb-2">Já viu ou foi vítima de um deepfake?</h3>
          <p className="text-muted-foreground">Conta pra gente nos comentários! 👇</p>
        </div>
      </div>

      <RelatedPosts currentSlug="deepfakes-ia-2026-como-identificar" />
      <CommentSection postId="deepfakes-ia-2026-como-identificar" postTitle="Deepfakes e IA 2026: Como Identificar Conteúdo Falso e Proteger sua Imagem" />
    </article>
  );
};

export default DeepfakesIA2026;
