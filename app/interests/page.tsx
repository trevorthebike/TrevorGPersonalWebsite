 import Image from 'next/image';

export default function Interests() {
    return(   
       <section className="border-4 border-black bg-black-300 p-4 text-center">
          <h3 className="text-2xl font-bold border-4 border-black mb-4 p-2">
            Interests
          </h3>
          <ul className="text-left list-disc list-inside">
            <li>
              <strong>Biking!!!:</strong> Mountain Bike, Road, Gravel, BMX
            </li>
          </ul>
        </section>
    )
}