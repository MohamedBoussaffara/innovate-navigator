import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Cpu, GraduationCap, Banknote, ArrowRight, Sparkles } from "lucide-react";

const programs = [
  {
    icon: Cpu,
    title: "Programme Industrie 4.0",
    description: "Accompagnement pour la transformation digitale et l'intégration des technologies avancées.",
    tags: ["IoT", "Automatisation", "Big Data"],
    type: "Accompagnement",
  },
  {
    icon: Banknote,
    title: "Financement Innovation",
    description: "Accès aux mécanismes de financement pour les projets d'innovation et de R&D.",
    tags: ["Subventions", "Crédit", "Investissement"],
    type: "Financement",
  },
  {
    icon: Building2,
    title: "Centres Techniques",
    description: "Mise en relation avec les centres techniques spécialisés (CETTEX, CTAA, CITET...).",
    tags: ["Expertise", "Formation", "Certification"],
    type: "Expertise",
  },
  {
    icon: GraduationCap,
    title: "Formation & Compétences",
    description: "Programmes de formation pour développer les compétences de vos équipes.",
    tags: ["E-learning", "Ateliers", "Certification"],
    type: "Formation",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Programmes d'Appui
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Découvrez les Dispositifs de Soutien
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Notre système de recommandation intelligent identifie les programmes 
            les plus adaptés à votre profil et vos objectifs.
          </p>
        </div>

        {/* AI Recommendation Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-primary p-8 text-primary-foreground">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 h-8" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-display text-xl font-bold mb-2">
                  Recommandations Personnalisées par IA
                </h3>
                <p className="text-primary-foreground/80">
                  Notre système utilise l'Intelligence Artificielle explicable pour vous proposer 
                  les programmes les plus pertinents avec une transparence totale sur les critères de sélection.
                </p>
              </div>
              <Button variant="heroOutline" className="flex-shrink-0">
                En Savoir Plus
              </Button>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {program.type}
                  </Badge>
                </div>
                <CardTitle className="font-display text-lg">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary">
                  Découvrir le programme
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
