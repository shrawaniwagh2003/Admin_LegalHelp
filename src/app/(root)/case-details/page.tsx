'use client';

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CaseDetails {
  _id: string;
  name: string;
  caseType: string;
  underSection: string;
  dateOfBirth: string;
  gender: string;
  phoneNumber: string;
  email: string;
  state: string;
  city: string;
  street: string;
  zipCode: string;
  incidentDate: string;
  incidentState: string;
  incidentCity: string;
  incidentStreet: string;
}

export default function CaseDetailsComponent() {
  const [cases, setCases] = useState<CaseDetails[]>([]); // Default state is an empty array
  const [formData, setFormData] = useState<Partial<CaseDetails>>({
    name: "",
    caseType: "",
    underSection: "",
    dateOfBirth: "",
    gender: "",
    phoneNumber: "",
    email: "",
    state: "",
    city: "",
    street: "",
    zipCode: "",
    incidentDate: "",
    incidentState: "",
    incidentCity: "",
    incidentStreet: "",
  });

  const fetchCases = async () => {
    try {
      const response = await axios.get("http://localhost:8888/cases");
      if (response.data.success) {
        setCases(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching cases:", error);
    }
  };

  useEffect(() => {


    fetchCases();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log(formData);
      const response = await axios.post("http://localhost:8888/cases", formData);

      if (response.status === 200) {
        const newCase: CaseDetails = response.data.data;
        await fetchCases();
        setCases((prevCases) => [...prevCases, newCase]);
        setFormData({
          name: "",
          caseType: "",
          underSection: "",
          dateOfBirth: "",
          gender: "",
          phoneNumber: "",
          email: "",
          state: "",
          city: "",
          street: "",
          zipCode: "",
          incidentDate: "",
          incidentState: "",
          incidentCity: "",
          incidentStreet: "",
        });
      }
    } catch (error) {
      console.error("Error adding case:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h2 className="text-xl font-semibold text-blue-900">Case Details</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Add Case</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-blue-900">Add Case Details</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[80vh]">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                  <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Name" />
                  <Input name="caseType" value={formData.caseType} onChange={handleInputChange} placeholder="Case Type" />
                  <Input name="underSection" value={formData.underSection} onChange={handleInputChange} placeholder="Under Section" />
                  <Input name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} placeholder="Date of Birth" />
                  <Input name="gender" value={formData.gender} onChange={handleInputChange} placeholder="Gender" />
                  <Input name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} placeholder="Phone Number" />
                  <Input name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
                  <Input name="state" value={formData.state} onChange={handleInputChange} placeholder="State" />
                  <Input name="city" value={formData.city} onChange={handleInputChange} placeholder="City" />
                  <Input name="street" value={formData.street} onChange={handleInputChange} placeholder="Street" />
                  <Input name="zipCode" value={formData.zipCode} onChange={handleInputChange} placeholder="Zip Code" />
                  <Input name="incidentDate" value={formData.incidentDate} onChange={handleInputChange} placeholder="Incident Date" />
                  <Input name="incidentState" value={formData.incidentState} onChange={handleInputChange} placeholder="Incident State" />
                  <Input name="incidentCity" value={formData.incidentCity} onChange={handleInputChange} placeholder="Incident City" />
                  <Input name="incidentStreet" value={formData.incidentStreet} onChange={handleInputChange} placeholder="Incident Street" />
                </div>
                <Button type="submit" className="mt-4 w-full bg-blue-600 text-white hover:bg-blue-700">Add</Button>
              </form>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-900 text-white">
              <TableHead>Name</TableHead>
              <TableHead>Case Type</TableHead>
              <TableHead>Under Section</TableHead>
              <TableHead>Date of Birth</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>State</TableHead>
              <TableHead>City</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cases.map((caseDetail) => (
              <TableRow key={caseDetail._id}>
                <TableCell>{caseDetail.name}</TableCell>
                <TableCell>{caseDetail.caseType}</TableCell>
                <TableCell>{caseDetail.underSection}</TableCell>
                <TableCell>{caseDetail.dateOfBirth}</TableCell>
                <TableCell>{caseDetail.phoneNumber}</TableCell>
                <TableCell>{caseDetail.email}</TableCell>
                <TableCell>{caseDetail.state}</TableCell>
                <TableCell>{caseDetail.city}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
