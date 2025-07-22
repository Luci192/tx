import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  Users, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  DollarSign,
  HandHeart,
  Truck,
  Phone,
  ExternalLink,
  Calendar,
  TrendingUp,
  Target,
  Gift,
  Repeat
} from "lucide-react";

// Import generated images
import heroImage from "@/assets/texas-flood-hero.jpg";
import volunteersImage from "@/assets/texas-flood-volunteers.jpg";
import texasFlagImage from "@/assets/texas-flag-emergency.jpg";

const Index = () => {
  const { toast } = useToast();

  const [raisedAmount] = useState(87742);
  const [goalAmount] = useState(150000);

  const donationProgress = Number(((raisedAmount / goalAmount) * 100).toFixed(1));

  const [showExitPopup, setShowExitPopup] = useState(false);





  // Back redirect functionality
  useEffect(() => {
    // Add a history entry when the page loads
    window.history.pushState(null, "", window.location.href);
    
    // Listen for back button click
    const handlePopState = () => {
      // Redirect to back redirect page instead of going back
      window.location.href = "/back-redirect";
    };

    window.addEventListener("popstate", handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // Exit intent functionality
  useEffect(() => {
    let exitIntentTriggered = false;

    // Browser beforeunload event for tab/window close
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!exitIntentTriggered) {
        exitIntentTriggered = true;
        e.preventDefault();
        e.returnValue = "Wait! Hundreds of families are still trapped and need your help. Don't leave them behind - your donation could save lives right now!";
        return e.returnValue;
      }
    };

    // Mouse leave event for exit intent popup
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitIntentTriggered) {
        exitIntentTriggered = true;
        setShowExitPopup(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Random names and cities for notifications
  const randomNames = [
    "John Smith", "Sarah Johnson", "Michael Brown", "Emma Davis", "James Wilson",
    "Ashley Miller", "David Garcia", "Jessica Rodriguez", "Christopher Martinez",
    "Amanda Anderson", "Daniel Taylor", "Jennifer Thomas", "Matthew Jackson",
    "Elizabeth White", "Anthony Harris", "Lisa Martin", "Mark Thompson",
    "Mary Garcia", "Steven Clark", "Patricia Lewis", "Paul Walker", "Karen Hall"
  ];

  const randomCities = [
    "Austin, TX", "Dallas, TX", "Houston, TX", "San Antonio, TX", "Fort Worth, TX",
    "New York, NY", "Los Angeles, CA", "Chicago, IL", "Phoenix, AZ", "Philadelphia, PA",
    "San Diego, CA", "Charlotte, NC", "Miami, FL", "Denver, CO", "Seattle, WA",
    "Atlanta, GA", "Boston, MA", "Portland, OR", "Nashville, TN", "Detroit, MI",
    "Las Vegas, NV", "Memphis, TN", "Orlando, FL", "Kansas City, MO", "Tampa, FL"
  ];

  const donationAmounts = [10, 15, 20, 25, 50, 100];

  // Dynamic notification system
  useEffect(() => {
    const showRandomNotification = () => {
      const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
      const randomCity = randomCities[Math.floor(Math.random() * randomCities.length)];
      const randomAmount = donationAmounts[Math.floor(Math.random() * donationAmounts.length)];
      
      toast({
        title: "New Donation 🙏!",
        description: `${randomName} from ${randomCity} just donated $${randomAmount}`,
        duration: 4000,
      });
    };

    // Show first notification after 5 seconds
const firstTimeout = setTimeout(showRandomNotification, 5000);

// Show subsequent notifications every 10-15 seconds
const interval = setInterval(() => {
  showRandomNotification();
}, Math.random() * 5000 + 10000); // 10–15 seconds

return () => {
  clearTimeout(firstTimeout);
  clearInterval(interval);
};

  }, [toast]);

  const oneTimeDonationAmounts = [
    { value: 5, label: "$5", description: "Emergency water bottles" },
    { value: 10, label: "$10", description: "Basic medical supplies" },
    { value: 15, label: "$15", description: "Emergency blankets" },
    { value: 20, label: "$20", description: "Food for a family" },
    { value: 25, label: "$25", description: "Emergency food kit" },
    { value: 50, label: "$50", description: "Clean water for 10 people" },
    { value: 100, label: "$100", description: "Emergency shelter supplies" },
    { value: 150, label: "$150", description: "First aid equipment" },
    { value: 200, label: "$200", description: "Rescue equipment" }
  ];

  const recurringPlans = [
    { value: 10, label: "$10/mo", description: "Basic Support", features: ["Monthly impact updates", "Emergency alerts", "Tax receipts"] },

  ];

  const handleOneTimeDonation = (amount: number) => {
    // Add UTM parameters for tracking
    const donationUrl = `https://buy.stripe.com/4gMfZh387cy1b9Ogc0bQY00?utm_source=donation_page&utm_medium=button&utm_campaign=texas_relief&utm_content=one_time_${amount}`;
    window.open(donationUrl, '_blank');
  };

  const handleRecurringDonation = (amount: number) => {
    // Add UTM parameters for tracking
    const donationUrl = `https://buy.stripe.com/4gMfZh387cy1b9Ogc0bQY00?utm_source=donation_page&utm_medium=button&utm_campaign=texas_relief&utm_content=recurring_${amount}`;
    window.open(donationUrl, '_blank');
  };

  const handleExitPopupDonation = () => {
    // Add UTM parameters for exit intent tracking
    const donationUrl = `https://buy.stripe.com/4gMfZh387cy1b9Ogc0bQY00?utm_source=donation_page&utm_medium=exit_popup&utm_campaign=texas_relief&utm_content=exit_intent`;
    window.open(donationUrl, '_blank');
    setShowExitPopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
          <Card className="max-w-md w-full shadow-urgent border-urgent/20 animate-scale-in">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-urgent rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-urgent">
                Don't Leave Them Behind!
              </CardTitle>
              <p className="text-muted-foreground">
                Families are still trapped and need your help RIGHT NOW
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-4">
                  🚨 <strong>170+ people still missing</strong> 🚨
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  Your $10 donation can provide 20 bottles of clean water
                </div>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleExitPopupDonation}
                  variant="donate"
                  size="lg" 
                  className="w-full shadow-urgent animate-pulse"
                >
                  🙏 YES, I'll Help Save Lives - $10
                </Button>
                
                <Button 
                  onClick={() => setShowExitPopup(false)}
                  variant="outline" 
                  size="sm"
                  className="w-full text-muted-foreground"
                >
                  Maybe later
                </Button>
              </div>

              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  ⏰ This emergency can't wait
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Header */}
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
            <a
  href="https://buy.stripe.com/4gMfZh387cy1b9Ogc0bQY00?utm_source=donation_page&utm_medium=header&utm_campaign=texas_relief&utm_content=header_button"
  target="_blank"
  className="inline-block"
>
  <Button variant="donate" size="lg" className="shadow-urgent">
    Donate Now
  </Button>
</a>

          </div>
        </div>
      </header>

      {/* Progress Bar Section */}
      <section className="py-6 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Emergency Goal</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-primary">${raisedAmount.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">of ${goalAmount.toLocaleString()}</div>
              </div>
            </div>
            <Progress value={donationProgress} className="h-3 mb-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{donationProgress}% completed</span>
              <span>${(goalAmount - raisedAmount).toLocaleString()} left</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroImage})` 
          }}
        />
        <div className="relative container mx-auto text-center text-white">
          <Badge className="mb-4 bg-urgent text-urgent-foreground">
            URGENT: Emergency Response Active
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Texas Needs Your Help
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Catastrophic flooding has devastated central Texas. Families have lost everything and need immediate support.
          </p>
          
          {/* Critical Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <AlertTriangle className="h-12 w-12 text-urgent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1 text-white">111</div>
                <div className="text-sm text-white">Lives Lost</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-urgent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1 text-white">170+</div>
                <div className="text-sm text-white">Still Missing</div>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-urgent mx-auto mb-2" />
                <div className="text-3xl font-bold mb-1 text-white">161</div>
                <div className="text-sm text-white">Missing in Kerr County</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
  <div className="container mx-auto text-center">
    <div className="flex items-center justify-center mb-4">
      <Gift className="h-8 w-8 text-primary mr-3" />
      <h3 className="text-3xl font-bold text-foreground">
        Donate Now
      </h3>
    </div>
    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
      Your donation brings immediate relief and hope to families in Texas. Every contribution makes a difference.
    </p>

    <div className="text-center">
      <Button
        variant="donate"
        size="lg"
        className="shadow-urgent"
        onClick={() =>
          window.open(
            "https://buy.stripe.com/4gMfZh387cy1b9Ogc0bQY00?utm_source=donation_page&utm_medium=button&utm_campaign=texas_relief",
            "_blank"
          )
        }
      >
        Donate Now
      </Button>
    </div>
  </div>
</section>




      

      {/* Live Updates Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">Live Updates from the Ground</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Latest news and updates from our emergency response teams and partners
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Update 1 */}
              <Card className="hover:shadow-medium transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-urgent border-urgent">
                      <Clock className="w-3 h-3 mr-1" />
                      7 min ago
                    </Badge>
                    <Badge className="bg-hope text-hope-foreground">Medical Response</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Emergency Medical Task Force Arrives</h4>
                  <p className="text-sm text-muted-foreground">
                    Texas Emergency Medical Task Force bus arrived in Center Point, providing advanced medical transport and evacuation services for mass casualty incidents.
                  </p>
                </CardContent>
              </Card>

              

              {/* Update 2 */}
              <Card className="hover:shadow-medium transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-urgent border-urgent">
                      <Clock className="w-3 h-3 mr-1" />
                      28 min ago
                    </Badge>
                    <Badge className="bg-primary text-primary-foreground">Official</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Gov. Abbott Orders Flags to Half-Staff</h4>
                  <p className="text-sm text-muted-foreground">
                    Governor Greg Abbott ordered Texas flags lowered to half-staff in honor of flood victims. "Texas stands united in mourning and in our resolve to support those who strive to heal and recover."
                  </p>
                </CardContent>
              </Card>

              {/* Update 3 */}
              <Card className="hover:shadow-medium transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-urgent border-urgent">
                      <Clock className="w-3 h-3 mr-1" />
                      2 hr ago
                    </Badge>
                    <Badge className="bg-hope text-hope-foreground">Rescue Operations</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Mules Assist in Difficult Terrain</h4>
                  <p className="text-sm text-muted-foreground">
                    Mission Mules organization arrived with six mules to transport equipment to chainsaw crews and assist searches along the Guadalupe River's challenging terrain.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Featured Image */}
              <Card className="overflow-hidden">
                <div className="aspect-video bg-cover bg-center" style={{ backgroundImage: `url(${volunteersImage})` }}>
                  <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h4 className="font-semibold mb-2">Volunteers Unite for Texas</h4>
                      <p className="text-sm opacity-90">
                        Community members and volunteers from across the nation are coming together to provide critical aid.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Critical Alert */}
              <Card className="border-urgent bg-urgent/5">
                <CardHeader>
                  <CardTitle className="flex items-center text-urgent">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Critical: Search Continues
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    Rescue teams are working through brutal heat and humidity. The Cajun Navy coordinator warns conditions are making it "increasingly harder to survive" for those still missing.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Guadalupe River, Kerr County</span>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Update */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Response Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">27</div>
                      <div className="text-xs text-muted-foreground">Lost at Camp Mystic</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">4</div>
                      <div className="text-xs text-muted-foreground">Days of Search</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-hope">1000+</div>
                      <div className="text-xs text-muted-foreground">Volunteers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-hope">24/7</div>
                      <div className="text-xs text-muted-foreground">Operations</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* How to Help Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 text-foreground">How You Can Help</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every contribution makes a difference in providing immediate relief and long-term recovery support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-urgent rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Emergency Donations</CardTitle>
                <CardDescription>
                  Provide immediate financial support for rescue operations, medical care, and emergency supplies
                </CardDescription>
              </CardHeader>
              <CardContent>
               <Button
                 variant="donate"
                 size="lg"
                 className="shadow-urgent"
                 onClick={() => handleOneTimeDonation(50)}
               >
                 Donate Now
               </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hope rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Supply Donations</CardTitle>
                <CardDescription>
                  Coordinate delivery of essential supplies including food, water, clothing, and medical equipment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://buy.stripe.com/4gMfZh387cy1b9Ogc0bQY00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button variant="hope" size="lg" className="w-full">
                  Coordinate Supplies
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-medium transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Volunteer Support</CardTitle>
                <CardDescription>
                  Join our volunteer network to help with on-ground operations, coordination, and community support
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://buy.stripe.com/4gMfZh387cy1b9Ogc0bQY00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <Button variant="hero" size="lg" className="w-full">
                    Volunteer Today
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Últimos Doadores Section */}
<section className="py-24 px-6 bg-white border-t">
  <div className="container mx-auto">
    <div className="text-center mb-20">
      <h3 className="text-4xl font-bold text-foreground">Latest Donors</h3>
      <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
        Every donation makes a difference. Thank you to these generous supporters.
      </p>
    </div>

    <div
      className="grid gap-6 max-w-6xl mx-auto"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
    >
      {[
        { name: "John Smith", amount: "$50", city: "Austin, TX" },
        { name: "Sarah Johnson", amount: "$100", city: "Dallas, TX" },
        { name: "Michael Brown", amount: "$25", city: "Houston, TX" },
        { name: "Emma Davis", amount: "$75", city: "San Antonio, TX" },
        { name: "James Wilson", amount: "$20", city: "Fort Worth, TX" },
        { name: "Ashley Miller", amount: "$150", city: "New York, NY" }
      ].map((donor, index) => (
        <div
          key={index}
          className="p-6 border rounded shadow-sm bg-gray-50"
        >
          <div className="font-semibold text-lg text-primary">{donor.name}</div>
          <div className="text-muted-foreground text-sm">{donor.city}</div>
          <div className="text-foreground mt-2 text-2xl">{donor.amount}</div>
        </div>
      ))}
    </div>
  </div>
</section>




          {/* Donation Impact */}
          <Card className="bg-gradient-subtle border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Your Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$25</div>
                  <div className="text-sm text-muted-foreground">Emergency food kit for a family</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$50</div>
                  <div className="text-sm text-muted-foreground">Clean water for 10 people</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$100</div>
                  <div className="text-sm text-muted-foreground">Emergency shelter supplies</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">$250</div>
                  <div className="text-sm text-muted-foreground">Medical supplies for rescue teams</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      

      

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-hero text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Time is Critical</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            With 170+ people still missing and rescue operations ongoing, every minute counts. Your donation provides immediate support for search and rescue efforts.
          </p>
            <Button
            variant="urgent"
            size="xl"
            className="text-xl px-16 py-8 mb-6"
            onClick={() => window.open("https://donate.stripe.com/cNi6oJcsIbxKgeX7Sn1sQ0w", "_blank")}
            >
            <Heart className="mr-3 h-6 w-6" />
            Donate to Save Lives
            </Button>
          <p className="text-sm opacity-90">
            100% of donations go directly to relief efforts. Tax-deductible receipts provided.
          </p>
        </div>
      </section>


      {/* PayPal Donation Section */}
<section className="py-16 px-4 bg-gradient-subtle border-t border-border">
  <div className="container mx-auto text-center">
    <h3 className="text-3xl font-bold mb-4 text-foreground">Donate with PayPal</h3>
    <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
      You can also support families in Texas through a secure PayPal donation. Every contribution, no matter the amount, makes an immediate difference.
    </p>
    <form
      action="https://www.paypal.com/donate"
      method="post"
      target="_top"
      className="inline-block"
    >
      <input type="hidden" name="hosted_button_id" value="YLPDZMMULQ78C" />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <img
        alt=""
        src="https://www.paypal.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    </form>
  </div>
</section>


      

      {/* Footer */}
      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-urgent rounded-full flex items-center justify-center">
                  <HandHeart className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-lg font-semibold">Texas Relief Alliance</h4>
              </div>
              <p className="text-sm opacity-90">
                A 501(c)(3) non-profit organization dedicated to providing emergency relief and disaster response across Texas and beyond.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="text-sm">1-800-999-999</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  <span className="text-sm">emergency@texasreliefalliance.org</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">Emergency Updates</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">Volunteer Portal</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span className="text-sm">Donation Tracking</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 opacity-20" />
          <div className="text-center text-sm opacity-75">
            <p>&copy; 2024 Texas Relief Alliance. All rights reserved. EIN: 12-3456789</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;