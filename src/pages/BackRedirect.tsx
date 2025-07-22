import { ArrowLeft, Heart, Users, Clock, AlertTriangle, HandHeart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BackRedirect = () => {
  const handleDonateNow = () => {
    // Add UTM parameters for back redirect tracking
    const donationUrl = "https://donate.stripe.com/cNi6oJcsIbxKgeX7Sn1sQ0w?utm_source=donation_page&utm_medium=back_redirect&utm_campaign=texas_relief&utm_content=back_redirect_page";
    window.open(donationUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header - matching main page */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center">
                <HandHeart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Texas Relief Alliance</h1>
                <p className="text-sm text-muted-foreground">Providing emergency aid to flood victims</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="py-16 px-4 flex items-center justify-center">
        <Card className="max-w-3xl w-full shadow-urgent border-urgent/20">
          <CardHeader className="text-center pb-6">
            <div className="w-20 h-20 bg-gradient-urgent rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertTriangle className="h-10 w-10 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold text-urgent mb-4">
              Wait! Don't Leave Yet...
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              Your help could be the difference between life and death
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Urgent stats */}
            <Card className="bg-urgent/5 border-urgent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-urgent mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  While you're reading this...
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-5 w-5 text-urgent" />
                    <span className="font-medium">500+ families still trapped</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-5 w-5 text-urgent" />
                    <span className="font-medium">72h without clean water</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Heart className="h-5 w-5 text-urgent" />
                    <span className="font-medium">50+ children homeless</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emotional stories */}
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg border border-border/50">
                <p className="text-foreground leading-relaxed">
                  <strong>Maria, age 8</strong>, has been in a temporary shelter for 3 days. 
                  She lost her favorite doll in the flood and cries every night asking 
                  when she can go home.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg border border-border/50">
                <p className="text-foreground leading-relaxed">
                  <strong>Mr. Roberto, 67</strong>, a diabetic, has been without his medication 
                  for 2 days. His house was completely flooded and he has nowhere to go.
                </p>
              </div>

              <div className="p-6 bg-white rounded-lg border border-border/50">
                <p className="text-foreground leading-relaxed">
                  <strong>The González family</strong> lost everything: house, car, documents. 
                  They now sleep on the floor of a gymnasium with 200+ other people.
                </p>
              </div>
            </div>

            {/* Impact section */}
            <Card className="bg-hope/5 border-hope/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-hope mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  What $10 Can Do Right Now:
                </h4>
                <ul className="space-y-2 text-sm text-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hope rounded-full"></div>
                    20 bottles of clean drinking water
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hope rounded-full"></div>
                    1 complete personal hygiene kit
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hope rounded-full"></div>
                    3 hot meals for one child
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-hope rounded-full"></div>
                    1 emergency thermal blanket
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Quote */}
            <div className="text-center p-6 bg-muted/50 rounded-lg border border-border/50">
              <p className="text-foreground italic mb-2">
                "Every second that passes without help is another family losing hope.
                You have the power to change this RIGHT NOW."
              </p>
              <span className="text-sm text-muted-foreground">- Emergency Coordinator</span>
            </div>

            {/* CTA Button */}
            <div className="text-center space-y-4">
              <Button 
                onClick={handleDonateNow}
                variant="donate"
                size="lg" 
                className="w-full text-lg py-6 shadow-urgent animate-pulse"
              >
                🚨 DONATE NOW AND SAVE LIVES
              </Button>
              
              <Badge variant="outline" className="text-urgent border-urgent">
                ⏰ This emergency can't wait. Every minute counts.
              </Badge>
              
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span>Coming back later might be too late</span>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 border-t border-border/50 text-center">
              <p className="text-xs text-muted-foreground">
                100% of donations go directly to victims • Full transparency • Verified nonprofit
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BackRedirect;