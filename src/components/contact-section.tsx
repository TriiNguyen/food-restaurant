"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-manrope font-bold text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-manrope text-xl">
                  {t("footer.contact")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">{t("contact.address")}</h4>
                    <p className="text-muted-foreground">
                      Hauptstraße 123
                      <br />
                      84453 Mühldorf am Inn
                      <br />
                      Germany
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">{t("contact.phone")}</h4>
                    <p className="text-muted-foreground">+49 8631 123456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">{t("contact.email")}</h4>
                    <p className="text-muted-foreground">
                      info@misshoian-muehldorf.de
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold">{t("contact.hours")}</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Sunday: 11:00 - 22:00</p>
                      <p>Kitchen closes at 21:30</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      Hauptstraße 123, Mühldorf am Inn
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reservation Form */}
          <Card>
            <CardHeader>
              <CardTitle className="font-manrope text-xl">
                {t("contact.reservation.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("contact.reservation.name")}
                    </label>
                    <Input placeholder={t("contact.reservation.name")} />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("contact.reservation.lastName")}
                    </label>
                    <Input placeholder={t("contact.reservation.lastName")} />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("contact.reservation.email")}
                  </label>
                  <Input
                    type="email"
                    placeholder={t("contact.reservation.email")}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("contact.reservation.phone")}
                  </label>
                  <Input
                    type="tel"
                    placeholder={t("contact.reservation.phone")}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("contact.reservation.date")}
                    </label>
                    <Input type="date" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      {t("contact.reservation.time")}
                    </label>
                    <Input type="time" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("contact.reservation.guests")}
                  </label>
                  <Input type="number" min="1" max="20" placeholder="2" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("contact.reservation.message")}
                  </label>
                  <Textarea
                    placeholder={t("contact.reservation.message")}
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90">
                  {t("contact.reservation.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
