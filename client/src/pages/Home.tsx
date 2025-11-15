import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MessageCircle, Globe, Smartphone, Shield, Zap, TrendingUp, Users, Database } from "lucide-react";
import { useEffect, useState } from "react";

// Import images
import logoImg from "@/assets/logo.png";
import dashboardImg from "@/assets/images/dashboard.png";
import evolucaoImg from "@/assets/images/evolucao.png";
import checkoutImg from "@/assets/images/checkout.png";
import comparativoImg from "@/assets/images/comparativo.png";
import rentabilidadeImg from "@/assets/images/rentabilidade.png";
import vendasImg from "@/assets/images/vendas.png";
import estoqueImg from "@/assets/images/estoque.png";
import comprasImg from "@/assets/images/compras.png";
import excessoImg from "@/assets/images/excesso.png";
import rupturaImg from "@/assets/images/ruptura.png";
import semGiroImg from "@/assets/images/sem_giro.png";
import reposicaoImg from "@/assets/images/reposicao.png";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappLink = "https://wa.me/5546991124141";
  const siteLink = "https://msconsultoria.net.br/";

  const telas = [
    { img: dashboardImg, title: "Dashboard de Performance", desc: "Visão 360° do negócio em tempo real", frase: "Enquanto você procura a informação, seu concorrente já lucrou" },
    { img: evolucaoImg, title: "Evolução Temporal", desc: "Antecipe o futuro analisando o passado", frase: "Quem não mede o passado, repete os mesmos erros caros" },
    { img: checkoutImg, title: "Análise de Checkout", desc: "Comportamento do cliente no detalhe", frase: "Achismo não paga conta. Dados sim" },
    { img: comparativoImg, title: "Comparativo de Períodos", desc: "Compare e vença", frase: "Sem comparar, você nunca saberá quanto dinheiro perdeu" },
    { img: rentabilidadeImg, title: "Rentabilidade", desc: "Sua lucratividade em foco", frase: "Promoção sem dados é doar dinheiro para o cliente" },
    { img: vendasImg, title: "Análise de Vendas", desc: "Cada produto, cada centavo conta", frase: "Dados não mentem. Seu palpite sim" },
    { img: estoqueImg, title: "Gestão de Estoque", desc: "Milhões sob controle", frase: "Estoque mal gerido sangra seu caixa todo santo dia" },
    { img: comprasImg, title: "Análise de Compras", desc: "Compre melhor, venda mais", frase: "Comprar no achismo é pagar mais caro para lucrar menos" },
    { img: excessoImg, title: "Análise de Excesso", desc: "Transforme estoque em caixa", frase: "Estoque encalhado não é ativo. É prejuízo disfarçado" },
    { img: rupturaImg, title: "Análise de Ruptura", desc: "Não perca mais vendas", frase: "Faltou produto? Você acabou de pagar a conta do concorrente" },
    { img: semGiroImg, title: "Produtos Sem Giro", desc: "Libere capital parado", frase: "Produto encalhado é dinheiro enterrado vivo no estoque" },
    { img: reposicaoImg, title: "Reposição Inteligente", desc: "Alertas automáticos", frase: "Palpite custa caro. Dados custam centavos" },
  ];

  const beneficios = [
    { icon: <Zap className="w-8 h-8" />, title: "Escalável", desc: "Melhorias compartilhadas na comunidade MS" },
    { icon: <Database className="w-8 h-8" />, title: "31 ERPs Integrados", desc: "100% validado com seu sistema" },
    { icon: <Shield className="w-8 h-8" />, title: "Customização Total", desc: "Controle de acesso por usuário" },
    { icon: <Smartphone className="w-8 h-8" />, title: "Acesso Mobile", desc: "Gestão de qualquer lugar" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Tempo Real", desc: "Vendas online atualizadas" },
    { icon: <Users className="w-8 h-8" />, title: "Monitoramento", desc: "Controle de uso e custos" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logoImg} alt="MS Consultoria" className="h-12 w-auto" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('beneficios')} className="text-muted-foreground hover:text-primary transition-colors">Benefícios</button>
            <button onClick={() => scrollToSection('telas')} className="text-muted-foreground hover:text-primary transition-colors">Funcionalidades</button>
            <button onClick={() => scrollToSection('contato')} className="text-muted-foreground hover:text-primary transition-colors">Contato</button>
          </nav>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className={`container relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                Business Intelligence
              </span>
              <br />
              <span className="text-foreground">que Multiplica Lucros</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Você gasta milhares em estoque sem saber se vai vender, mas acha caro investir em dados que garantem que vai.
            </p>

            <p className="text-lg md:text-xl text-accent font-semibold italic max-w-3xl mx-auto">
              Enquanto isso, perde tempo em planilhas longe da família, longe do negócio, longe do lucro. BI te liberta para fazer o que realmente importa: vender, lucrar e ficar perto do ativo mais valioso, sua vida e família.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group">
                  Quero Transformar Meu Negócio
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={siteLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group border-primary/50 hover:border-primary">
                  <Globe className="mr-2 w-5 h-5" />
                  Visitar Site
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Introdução com Dados de Mercado */}
      <section id="intro" className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-primary">77% dos CEOs de sucesso</span> já tomam decisões com dados
            </h2>
            <p className="text-2xl text-muted-foreground">
              Você está nos 77% ou nos 23% que estão perdendo mercado?
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-primary mb-2">10%</div>
                <div className="text-muted-foreground">Crescimento anual do mercado de BI no Brasil</div>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-secondary mb-2">US$ 400M</div>
                <div className="text-muted-foreground">Receita de BI no Brasil em 2025</div>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all hover:scale-105">
                <div className="text-5xl font-bold text-accent mb-2">30%</div>
                <div className="text-muted-foreground">Empresas com BI crescem mais rápido</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por que <span className="text-primary">MS Consultoria BI</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A solução completa que empresas que faturam R$ 1 bilhão/ano confiam
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficios.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase das Telas */}
      <section id="telas" className="py-24 bg-card/30 backdrop-blur-sm">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">12 Dashboards</span> Poderosos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada tela foi projetada para transformar dados em lucro
            </p>
          </div>

          <div className="space-y-24">
            {telas.map((tela, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="flex-1 group">
                  <div className="relative overflow-hidden rounded-2xl border-2 border-border hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
                    <img
                      src={tela.img}
                      alt={tela.title}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                    Dashboard #{idx + 1}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">{tela.title}</h3>
                  <p className="text-xl text-muted-foreground">{tela.desc}</p>
                  <div className="p-6 bg-accent/10 border-l-4 border-accent rounded-r-xl">
                    <p className="text-accent font-bold italic text-lg">"{tela.frase}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credibilidade */}
      <section className="py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="text-6xl md:text-8xl font-bold text-primary mb-4">R$ 1 Bilhão</div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Empresas deste porte confiam no nosso B.I
            </h2>
            <p className="text-xl text-muted-foreground">
              Se funciona para quem fatura 1 bilhão por ano, imagine o que pode fazer pelo seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Futuro */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Futuro Está <span className="text-primary">Chegando</span>
            </h2>
            <p className="text-xl text-muted-foreground">Implementações a curto prazo</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:scale-105">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-3">Alertas via WhatsApp</h3>
              <p className="text-muted-foreground">Receba notificações importantes direto no seu celular</p>
            </div>
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:scale-105">
              <Globe className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold mb-3">PDF Automático</h3>
              <p className="text-muted-foreground">Relatórios diários enviados conforme seu interesse</p>
            </div>
            <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all hover:scale-105">
              <Zap className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Insights por I.A</h3>
              <p className="text-muted-foreground">Análises inteligentes enviadas via WhatsApp</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section id="contato" className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Pare de Perder Dinheiro.<br />
              <span className="text-primary">Comece a Lucrar Mais HOJE</span>
            </h2>
            <p className="text-2xl text-muted-foreground">
              Quanto dinheiro você está perdendo AGORA?
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-8 group">
                  <MessageCircle className="mr-3 w-6 h-6" />
                  Falar com Especialista
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>

            <div className="pt-12 space-y-4 text-muted-foreground">
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  46 9 9112 4141
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <a href={siteLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  msconsultoria.net.br
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>✉️</span>
                <a href="mailto:maicouandrade@msconsultoria.net.br" className="hover:text-primary transition-colors">
                  maicouandrade@msconsultoria.net.br
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logoImg} alt="MS Consultoria" className="h-8 w-auto" />
          </div>
          <p>© 2025 MS Consultoria. Todos os direitos reservados.</p>
          <p className="mt-2 text-sm">Transformando dados em lucro desde sempre.</p>
        </div>
      </footer>
    </div>
  );
}
