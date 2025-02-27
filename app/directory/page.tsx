import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function DirectoryPage() {
  const emergencyNumbers = [
    { name: "Polisi", number: "110" },
    { name: "Pemadam Kebakaran", number: "113" },
    { name: "Ambulans", number: "118" },
    { name: "Basarnas", number: "115" },
  ]

  const groceryStores = [
    { name: "Superindo", address: "Jl. Raya Serpong No. 8, Serpong, Tangerang Selatan", phone: "021-5559876" },
    { name: "Ranch Market", address: "Jl. BSD Green Office Park No. 6, BSD City", phone: "021-5551234" },
    { name: "Farmers Market", address: "Jl. Raya Serpong KM 7, BSD City", phone: "021-5555678" },
  ]

  const certifiedMerchants = [
    { name: "Warung Pak Budi", type: "Food", phone: "081234567893" },
    { name: "Laundry Express", type: "Service", phone: "081234567894" },
    { name: "Mini Mart Sejahtera", type: "Grocery", phone: "081234567895" },
  ]

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Community Directory</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Emergency Numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyNumbers.map((item, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-2xl font-bold">{item.number}</p>
              </div>
              <Button size="icon" className="rounded-full" asChild>
                <a href={`tel:${item.number}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-yellow-500 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-white">Jabu Certified Merchants</h2>
        <p className="text-white mb-4">Trusted local businesses endorsed by Jabu for quality service and products.</p>
        <div className="space-y-4">
          {certifiedMerchants.map((merchant, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <h3 className="font-medium">{merchant.name}</h3>
                <p className="text-sm text-muted-foreground">{merchant.type}</p>
                <p>{merchant.phone}</p>
              </div>
              <Button size="icon" className="rounded-full" asChild>
                <a href={`tel:${merchant.phone}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Grocery Stores</h2>
        <div className="space-y-4">
          {groceryStores.map((store, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground p-4 rounded-lg shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-medium">{store.name}</h3>
                <p className="text-sm text-muted-foreground">{store.address}</p>
                <p>{store.phone}</p>
              </div>
              <Button size="icon" className="rounded-full" asChild>
                <a href={`tel:${store.phone.replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <Button asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  )
}

