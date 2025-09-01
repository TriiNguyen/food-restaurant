"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import vietnameseChefPreparingTraditionalPhoInAuthe from "@/assets/vietnamese-chef-preparing-traditional-pho-in-authe.png";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            {t("about.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={vietnameseChefPreparingTraditionalPhoInAuthe.src}
              alt="Vietnamese chef preparing traditional dishes"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="font-manrope font-bold text-2xl md:text-3xl text-foreground">
              Authentic Vietnamese Heritage
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t("about.description")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every dish we serve is prepared with the same care and attention
              to detail as it would be in a Vietnamese home. We source authentic
              ingredients and spices directly from Vietnam to ensure the most
              genuine flavors in every bite.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our restaurant is more than just a place to eat – it's a cultural
              bridge that brings the warmth, hospitality, and rich culinary
              traditions of Vietnam to our community in Muehldorf.
            </p>
          </div>
        </div>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-manrope font-semibold text-xl mb-3">
                Made with Love
              </h4>
              <p className="text-muted-foreground">
                Every dish is prepared with passion and care, using traditional
                family recipes passed down through generations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-manrope font-semibold text-xl mb-3">
                Community Focus
              </h4>
              <p className="text-muted-foreground">
                We believe in bringing people together through food, creating a
                warm and welcoming space for all.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-manrope font-semibold text-xl mb-3">
                Authentic Quality
              </h4>
              <p className="text-muted-foreground">
                We maintain the highest standards of authenticity, using only
                the finest ingredients and traditional methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
