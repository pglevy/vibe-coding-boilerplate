import { useState } from 'react';
import { CheckCircle, Mail, Phone } from "lucide-react";

const FormDemoPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('form');
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

  const handleCheckboxChange = (checked: boolean, id: string) => {
    if (id === "newsletter") {
      setFormValues({
        ...formValues,
        newsletter: checked
      });
    } else {
      // For interests array
      setFormValues({
        ...formValues,
        interests: checked 
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
    <div className="max-w-3xl mx-auto py-sail-standard px-sail-standard">
      <h1 className="text-sail-large font-bold mb-sail-standard text-center">SAIL Form Components Demo</h1>
      
      {formSubmitted && (
        <div className="mb-sail-standard bg-sail-bg-success border border-sail-positive rounded-sail-semi-rounded p-sail-standard">
          <div className="flex items-center">
            <CheckCircle className="h-4 w-4 text-sail-positive mr-2" />
            <div>
              <h3 className="text-sail-medium font-semibold text-sail-positive">Success!</h3>
              <p className="text-sail-standard text-sail-standard mt-sail-even-less">
                Your form has been submitted successfully.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="mb-sail-standard">
        <div className="border-b border-sail-secondary">
          <nav className="flex space-x-sail-standard">
            {['form', 'preview'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-sail-less px-sail-even-less border-b-2 text-sail-medium font-medium capitalize ${
                  activeTab === tab
                    ? 'border-sail-accent text-sail-accent'
                    : 'border-transparent text-sail-secondary hover:text-sail-standard'
                }`}
              >
                {tab === 'form' ? 'Registration Form' : 'Data Preview'}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      {activeTab === 'form' && (
        <div className="bg-sail-bg-standard rounded-sail-semi-rounded border border-sail-secondary">
          <div className="px-sail-standard py-sail-less border-b border-sail-secondary">
            <h2 className="text-sail-medium-plus font-semibold text-sail-standard">Registration Form</h2>
            <p className="text-sail-standard text-sail-secondary mt-sail-even-less">
              Fill out this form to create your account.
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="p-sail-standard space-y-sail-standard">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-sail-even-less">
                  <label htmlFor="firstName" className="block text-sail-medium font-medium text-sail-standard">
                    First Name
                  </label>
                  <input 
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none"
                  />
                </div>
                
                <div className="space-y-sail-even-less">
                  <label htmlFor="lastName" className="block text-sail-medium font-medium text-sail-standard">
                    Last Name
                  </label>
                  <input 
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none"
                  />
                </div>
              </div>
              
              <div className="space-y-sail-even-less">
                <label htmlFor="email" className="block text-sail-medium font-medium text-sail-standard">
                  Email Address
                </label>
                <div className="flex">
                  <div className="bg-gray-100 flex items-center px-sail-less rounded-l-md border border-r-0 border-sail-secondary">
                    <Mail className="h-4 w-4 text-sail-secondary" />
                  </div>
                  <input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="w-full p-sail-less border border-sail-secondary rounded-r-md text-sail-standard focus:border-sail-accent focus:outline-none"
                    value={formValues.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-sail-even-less">
                <label htmlFor="phone" className="block text-sail-medium font-medium text-sail-standard">
                  Phone Number
                </label>
                <div className="flex">
                  <div className="bg-gray-100 flex items-center px-sail-less rounded-l-md border border-r-0 border-sail-secondary">
                    <Phone className="h-4 w-4 text-sail-secondary" />
                  </div>
                  <input 
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    className="w-full p-sail-less border border-sail-secondary rounded-r-md text-sail-standard focus:border-sail-accent focus:outline-none"
                    value={formValues.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-sail-even-less">
                <label htmlFor="country" className="block text-sail-medium font-medium text-sail-standard">
                  Country
                </label>
                <select 
                  id="country"
                  value={formValues.country}
                  onChange={(e) => setFormValues({...formValues, country: e.target.value})}
                  className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                </select>
              </div>
              
              <div className="space-y-sail-even-less">
                <label className="block text-sail-medium font-medium text-sail-standard">
                  Areas of Interest
                </label>
                <div className="flex flex-wrap gap-4 mt-sail-even-less">
                  {interestOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={option.id} 
                        checked={formValues.interests.includes(option.id)}
                        onChange={(e) => handleCheckboxChange(e.target.checked, option.id)}
                        className="h-4 w-4 text-sail-accent border-sail-secondary rounded focus:ring-sail-accent"
                      />
                      <label htmlFor={option.id} className="cursor-pointer text-sail-standard text-sail-standard">
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-sail-even-less">
                <label htmlFor="bio" className="block text-sail-medium font-medium text-sail-standard">
                  Bio
                </label>
                <textarea 
                  id="bio"
                  name="bio"
                  placeholder="Tell us a bit about yourself..."
                  value={formValues.bio}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-standard focus:border-sail-accent focus:outline-none resize-none"
                />
              </div>
              
              <div className="space-y-sail-even-less">
                <label className="block text-sail-medium font-medium text-sail-standard">
                  Notification Preferences
                </label>
                <div className="space-y-sail-even-less mt-sail-even-less">
                  <div className="flex items-center justify-between">
                    <label htmlFor="emailNotifications" className="cursor-pointer text-sail-standard text-sail-standard">
                      Email Notifications
                    </label>
                    <input
                      type="checkbox"
                      id="emailNotifications" 
                      checked={formValues.notifications.email}
                      onChange={(e) => handleSwitchChange(e.target.checked, "email")}
                      className="h-4 w-4 text-sail-accent border-sail-secondary rounded focus:ring-sail-accent"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label htmlFor="smsNotifications" className="cursor-pointer text-sail-standard text-sail-standard">
                      SMS Notifications
                    </label>
                    <input
                      type="checkbox"
                      id="smsNotifications" 
                      checked={formValues.notifications.sms}
                      onChange={(e) => handleSwitchChange(e.target.checked, "sms")}
                      className="h-4 w-4 text-sail-accent border-sail-secondary rounded focus:ring-sail-accent"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 pt-sail-even-less">
                <input
                  type="checkbox"
                  id="newsletter" 
                  checked={formValues.newsletter}
                  onChange={(e) => handleCheckboxChange(e.target.checked, "newsletter")}
                  className="h-4 w-4 text-sail-accent border-sail-secondary rounded focus:ring-sail-accent"
                />
                <label htmlFor="newsletter" className="cursor-pointer text-sail-standard text-sail-standard">
                  I want to receive the newsletter
                </label>
              </div>
            </div>
            
            <div className="flex justify-between px-sail-standard py-sail-less border-t border-sail-secondary">
              <button 
                type="button" 
                onClick={() => setFormValues({
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
                })}
                className="bg-sail-bg-standard text-sail-secondary px-sail-standard py-sail-less border border-sail-secondary rounded-sail-semi-rounded text-sail-medium font-medium hover:bg-gray-50"
              >
                Reset
              </button>
              <button 
                type="submit"
                className="bg-sail-accent text-white px-sail-standard py-sail-less rounded-sail-semi-rounded text-sail-medium font-medium hover:opacity-90"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      
      {activeTab === 'preview' && (
        <div className="bg-sail-bg-standard rounded-sail-semi-rounded border border-sail-secondary">
          <div className="px-sail-standard py-sail-less border-b border-sail-secondary">
            <h2 className="text-sail-medium-plus font-semibold text-sail-standard">Form Data Preview</h2>
            <p className="text-sail-standard text-sail-secondary mt-sail-even-less">
              This is what your submitted data will look like.
            </p>
          </div>
          <div className="p-sail-standard">
            <pre className="bg-gray-100 p-sail-standard rounded-sail-semi-rounded overflow-auto max-h-64 text-sail-small">
              {JSON.stringify(formValues, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormDemoPage;