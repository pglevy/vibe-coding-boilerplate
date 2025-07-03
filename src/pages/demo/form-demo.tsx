import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Mail, Phone } from "lucide-react";

const FormDemoPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "United States",
    interests: [] as string[],
    bio: "",
    newsletter: false,
    notifications: {
      email: true,
      sms: false
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleCheckboxChange = (checked: boolean | string, id: string) => {
    const isChecked = checked === true;
    if (id === "newsletter") {
      setFormValues({
        ...formValues,
        newsletter: isChecked
      });
    } else {
      // For interests array
      setFormValues({
        ...formValues,
        interests: isChecked 
          ? [...formValues.interests, id]
          : formValues.interests.filter(item => item !== id)
      });
    }
  };

  const handleSwitchChange = (checked: boolean, id: string) => {
    setFormValues({
      ...formValues,
      notifications: {
        ...formValues.notifications,
        [id]: checked
      }
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formValues);
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const interestOptions = [
    { id: "technology", label: "Technology" },
    { id: "design", label: "Design" },
    { id: "business", label: "Business" }
  ];

  return (
    <div className="container mx-auto py-6 px-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Form Components Demo</h1>
      
      {formSubmitted && (
        <Alert className="mb-6 bg-green-50 border-green-200">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your form has been submitted successfully.
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="form" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="form">Registration Form</TabsTrigger>
          <TabsTrigger value="preview">Data Preview</TabsTrigger>
        </TabsList>
        
        <TabsContent value="form">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Registration Form</CardTitle>
              <CardDescription>
                Fill out this form to create your account.
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      value={formValues.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      value={formValues.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="flex">
                    <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0 border-gray-300">
                      <Mail className="h-4 w-4 text-gray-500" />
                    </div>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="rounded-l-none"
                      value={formValues.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex">
                    <div className="bg-gray-100 flex items-center px-3 rounded-l-md border border-r-0 border-gray-300">
                      <Phone className="h-4 w-4 text-gray-500" />
                    </div>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      className="rounded-l-none"
                      value={formValues.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select 
                    value={formValues.country}
                    onValueChange={(value) => setFormValues({...formValues, country: value})}
                  >
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="United States">United States</SelectItem>
                      <SelectItem value="Canada">Canada</SelectItem>
                      <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                      <SelectItem value="Australia">Australia</SelectItem>
                      <SelectItem value="Germany">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label>Areas of Interest</Label>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {interestOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={option.id} 
                          checked={formValues.interests.includes(option.id)}
                          onCheckedChange={(checked) => handleCheckboxChange(checked, option.id)}
                        />
                        <Label htmlFor={option.id} className="cursor-pointer">{option.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea 
                    id="bio"
                    name="bio"
                    placeholder="Tell us a bit about yourself..."
                    value={formValues.bio}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Notification Preferences</Label>
                  <div className="space-y-2 mt-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="emailNotifications" className="cursor-pointer">
                        Email Notifications
                      </Label>
                      <Switch 
                        id="emailNotifications" 
                        checked={formValues.notifications.email}
                        onCheckedChange={(checked) => handleSwitchChange(checked, "email")}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="smsNotifications" className="cursor-pointer">
                        SMS Notifications
                      </Label>
                      <Switch 
                        id="smsNotifications" 
                        checked={formValues.notifications.sms}
                        onCheckedChange={(checked) => handleSwitchChange(checked, "sms")}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox 
                    id="newsletter" 
                    checked={formValues.newsletter}
                    onCheckedChange={(checked) => handleCheckboxChange(checked, "newsletter")}
                  />
                  <Label htmlFor="newsletter" className="cursor-pointer">
                    I want to receive the newsletter
                  </Label>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" type="button" onClick={() => setFormValues({
                  firstName: "",
                  lastName: "",
                  email: "",
                  phone: "",
                  country: "United States",
                  interests: [] as string[],
                  bio: "",
                  newsletter: false,
                  notifications: {
                    email: true,
                    sms: false
                  }
                })}>
                  Reset
                </Button>
                <Button type="submit">Submit</Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        
        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Form Data Preview</CardTitle>
              <CardDescription>
                This is what your submitted data will look like.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-100 p-4 rounded-md overflow-auto max-h-64">
                {JSON.stringify(formValues, null, 2)}
              </pre>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormDemoPage;