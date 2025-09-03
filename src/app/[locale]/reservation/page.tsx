import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

export default function ReservationPage() {
  const t = useTranslations();
  return (
    <section id="reservation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
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
                    {t("contact.reservation.name")}
                  </label>
                  <Input placeholder={t("contact.reservation.name")} />
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
    </section>
  );
}
