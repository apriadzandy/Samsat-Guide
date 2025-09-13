import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  Circle,
  Clock,
  MapPin,
  ArrowLeft,
  ArrowRight,
  Home,
  FileText,
} from "lucide-react";
import { SamsatService, ServiceStep } from "@/types/samsat";

interface StepGuideProps {
  service: SamsatService;
  onBack: () => void;
}

export const StepGuide = ({ service, onBack }: StepGuideProps) => {
  const [currentSteps, setCurrentSteps] = useState<ServiceStep[]>(service.steps);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const completedSteps = currentSteps.filter((s) => s.isCompleted).length;
  const progress = (completedSteps / currentSteps.length) * 100;
  const currentStep = currentSteps[currentStepIndex];
  const isLastStep = currentStepIndex === currentSteps.length - 1;
  const isFirstStep = currentStepIndex === 0;
  const isAllCompleted = completedSteps === currentSteps.length;

  const completeCurrentStep = () => {
    const updated = currentSteps.map((s) =>
      s.id === currentStep.id ? { ...s, isCompleted: true } : s
    );
    setCurrentSteps(updated);
    if (!isLastStep) setCurrentStepIndex((p) => p + 1);
  };

  const goToNextStep = () => !isLastStep && setCurrentStepIndex((p) => p + 1);
  const goToPrevStep = () => !isFirstStep && setCurrentStepIndex((p) => p - 1);

  return (
    <div className="container mx-auto max-w-5xl px-4 sm:px-6 space-y-4 md:space-y-6">
      {/* ===== Floating Back Button (TERPISAH dari card biru) ===== */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onBack}
        className="fixed top-3 left-3 z-50 bg-white/70 backdrop-blur text-primary hover:bg-white"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Kembali
      </Button>

      {/* ===== Header Card (biru) ===== */}
      <Card className="gradient-primary text-white shadow-primary mt-10">
        <CardHeader className="text-center p-5 md:p-6">
          <div className="text-3xl md:text-4xl mb-1">{service.icon}</div>
          <CardTitle className="text-lg md:text-2xl">{service.title}</CardTitle>
          <CardDescription className="text-white/80 mt-1 text-sm md:text-base">
            {service.description}
          </CardDescription>
        </CardHeader>
      </Card>

      {/* ===== Progress Overview ===== */}
      <Card>
        <CardContent className="pt-4 md:pt-6">
          <div className="space-y-3 md:space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-base md:text-lg">Progress Layanan</h3>
              <Badge variant={isAllCompleted ? "default" : "secondary"} className="text-xs md:text-sm">
                {completedSteps}/{currentSteps.length} Langkah
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>Estimasi: {service.estimatedTime}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ===== Steps Area ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Current Step Detail */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2 md:pb-4">
            <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
              {currentStep.isCompleted ? (
                <CheckCircle className="w-5 h-5 text-green-600" />
              ) : (
                <Circle className="w-5 h-5 text-primary" />
              )}
              Langkah {currentStep.id}: {currentStep.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 md:space-y-5">
            <p className="text-sm md:text-base text-muted-foreground">{currentStep.description}</p>

            <div className="flex items-start gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary mt-0.5" />
              <span className="font-medium">Lokasi: {currentStep.location}</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevStep}
                disabled={isFirstStep}
                className="w-full sm:w-auto"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Sebelumnya
              </Button>

              {!currentStep.isCompleted ? (
                <Button onClick={completeCurrentStep} size="sm" className="gradient-primary w-full sm:w-auto">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Selesai
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={goToNextStep}
                  disabled={isLastStep}
                  className="w-full sm:w-auto"
                >
                  Selanjutnya
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar: Semua Langkah */}
        <Card className="lg:sticky lg:top-6">
          <CardHeader className="pb-2 md:pb-4">
            <CardTitle className="text-base md:text-lg">Semua Langkah</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 md:space-y-3">
            {currentSteps.map((step, index) => {
              const isActive = index === currentStepIndex;
              return (
                <button
                  key={step.id}
                  className={`w-full text-left rounded-lg border transition-smooth p-3 md:p-4 ${
                    isActive ? "border-primary bg-primary/5" : "border-border hover:bg-muted/50"
                  }`}
                  onClick={() => setCurrentStepIndex(index)}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5">
                      {step.isCompleted ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : isActive ? (
                        <Circle className="w-5 h-5 text-primary fill-primary/20" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm leading-tight">{step.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{step.location}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* ===== Requirements ===== */}
      <Card>
        <CardHeader className="pb-2 md:pb-4">
          <CardTitle className="flex items-center gap-2 text-base md:text-lg">
            <FileText className="w-5 h-5" />
            Persyaratan Lengkap
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {service.requirements.map((req, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm md:text-base">{req}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ===== Completion ===== */}
      {isAllCompleted && (
        <Card className="border-green-600 bg-green-600/5">
          <CardContent className="pt-6 text-center">
            <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Proses Selesai!</h3>
            <p className="text-muted-foreground mb-6">
              Anda telah menyelesaikan semua langkah untuk {service.title}. Terima kasih telah
              menggunakan layanan SAMSAT.
            </p>
            <Button onClick={onBack} className="gradient-primary">
              <Home className="w-4 h-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
