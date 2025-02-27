"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import residents from "@/data/residents.json"

interface Resident {
  id: number
  name: string
  email: string
  phone: string
  unit: string
}

export default function AdminPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [unit, setUnit] = useState("")
  const [editingResident, setEditingResident] = useState<Resident | null>(null)
  const [localResidents, setLocalResidents] = useState<Resident[]>(residents)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const residentData = {
      id: editingResident?.id || Date.now(),
      name,
      email,
      phone,
      unit,
    }

    if (editingResident) {
      setLocalResidents((prev) => prev.map((r) => (r.id === editingResident.id ? residentData : r)))
      toast({
        title: "Resident Updated",
        description: "The resident information has been successfully updated.",
      })
    } else {
      setLocalResidents((prev) => [...prev, residentData])
      toast({
        title: "Resident Registered",
        description: "The resident has been successfully registered.",
      })
    }

    setEditingResident(null)
    setName("")
    setEmail("")
    setPhone("")
    setUnit("")
  }

  const handleEdit = (resident: Resident) => {
    setEditingResident(resident)
    setName(resident.name)
    setEmail(resident.email)
    setPhone(resident.phone)
    setUnit(resident.unit)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Admin Portal</h1>
      <Tabs defaultValue="register" className="w-full">
        <TabsList>
          <TabsTrigger value="register">Register New Resident</TabsTrigger>
          <TabsTrigger value="registered">Registered Residents</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <div className="bg-card text-card-foreground shadow-md rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                  Name
                </label>
                <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                  Email
                </label>
                <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-muted-foreground mb-1">
                  Phone
                </label>
                <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
              <div>
                <label htmlFor="unit" className="block text-sm font-medium text-muted-foreground mb-1">
                  Unit Number
                </label>
                <Input id="unit" value={unit} onChange={(e) => setUnit(e.target.value)} required />
              </div>
              <Button type="submit">{editingResident ? "Update Resident" : "Register Resident"}</Button>
            </form>
          </div>
        </TabsContent>
        <TabsContent value="registered">
          <div className="bg-card text-card-foreground shadow-md rounded-lg p-6">
            <ul className="space-y-4">
              {localResidents.map((resident) => (
                <li key={resident.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{resident.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {resident.email} | {resident.phone} | Unit: {resident.unit}
                    </p>
                  </div>
                  <Button onClick={() => handleEdit(resident)}>Edit</Button>
                </li>
              ))}
            </ul>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

