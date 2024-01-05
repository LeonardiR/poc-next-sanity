import Image from 'next/image'
import { getUser } from '../sanity/lib/sanity.query'
import { User } from './types/user';

export default async function Home() {

  const user: User[] = await getUser();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {user && user.map((usr) => (
            <div key={usr._id}>
              <Image
                    className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
                    src={usr.profileImage.image}
                    width={400}
                    height={400}
                    quality={100}
                    alt={usr.profileImage.alt}
                  />
             <h1>
                {usr.name}
             </h1>
             <h2>
                {usr.lastName}
             </h2>
             <h3>
                {usr.email}
             </h3>
            </div>
         ))}
      </div>
    </main>
  )
}
