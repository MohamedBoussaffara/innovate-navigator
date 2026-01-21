import { Monitor, Lightbulb, Leaf, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const axes = [
  {
    icon: Monitor,
    title: "Digitalisation & Industrie 4.0",
    description: "Automatisation, IoT, systèmes connectés et gestion des données",
    progress: 72,
    color: "bg-chart-digital",
    bgColor: "bg-chart-digital/10",
    iconColor: "text-chart-digital",
  },
  {
    icon: Lightbulb,
    title: "Innovation & R&D",
    description: "Capacité d'innovation, brevets, partenariats et veille technologique",
    progress: 58,
    color: "bg-chart-innovation",
    bgColor: "bg-chart-innovation/10",
    iconColor: "text-chart-innovation",
  },
  {
    icon: Leaf,
    title: "Efficacité Énergétique",
    description: "Performance environnementale et transition énergétique",
    progress: 45,
    color: "bg-chart-energy",
    bgColor: "bg-chart-energy/10",
    iconColor: "text-chart-energy",
  },
  {
    icon: Users,
    title: "Ressources Humaines",
    description: "Compétences, formation continue et gestion des talents",
    progress: 68,
    color: "bg-chart-hr",
    bgColor: "bg-chart-hr/10",
    iconColor: "text-chart-hr",
  },
  {
    icon: TrendingUp,
    title: "Performance Globale",
    description: "Indicateurs de performance, productivité et compétitivité",
    progress: 61,
    color: "bg-chart-performance",
    bgColor: "bg-chart-performance/10",
    iconColor: "text-chart-performance",
  },
];

const DiagnosticSection = () => {
  return (
    <section id="diagnostic" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Diagnostic 360°
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Évaluez votre Maturité sur 5 Axes Stratégiques
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre diagnostic complet analyse votre entreprise selon les critères essentiels 
            de la transformation industrielle moderne.
          </p>
        </div>

        {/* Axes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {axes.map((axe, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50"
            >
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 rounded-xl ${axe.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <axe.icon className={`w-6 h-6 ${axe.iconColor}`} />
                </div>
                <CardTitle className="font-display text-lg">{axe.title}</CardTitle>
                <CardDescription className="text-sm">{axe.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Niveau de maturité</span>
                    <span className="font-semibold text-foreground">{axe.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${axe.color} rounded-full transition-all duration-1000`}
                      style={{ width: `${axe.progress}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* CTA Card */}
          <Card className="flex flex-col items-center justify-center p-8 bg-gradient-primary text-primary-foreground border-0">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h3 className="font-display text-xl font-bold mb-2">Prêt à Évaluer?</h3>
            <p className="text-center text-primary-foreground/80 mb-4">
              Commencez votre diagnostic gratuit en moins de 15 minutes
            </p>
            <button className="px-6 py-2.5 bg-primary-foreground text-primary rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors">
              Démarrer Maintenant
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
