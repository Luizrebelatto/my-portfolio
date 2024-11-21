import Image from "next/image";
import styles from "./styles.module.css"

export default function Home() {
  const projects = [
    { id: 1, name: "Pledge", icon: "🔒" },
    { id: 2, name: "Beacon", icon: "📍" },
    { id: 3, name: "MedsAI", icon: "🩺" },
    { id: 4, name: "Take!", icon: "👤" },
    { id: 5, name: "Yester", icon: "📣" },
    { id: 6, name: "Indiestry", icon: "🏗️" },
  ];


  return (
    <div style={{ padding: 20 }}>
      <header>
        <div style={{ overflow: "hidden", backgroundColor: "#000", display: "flex", justifyContent: "right", gap: 20 }}>
          <a className="active" href="#home">Linkedin</a>
          <a href="#news">Github</a>
          <a href="#contact">Resume</a>
          <a href="#about">About</a>
        </div>
      </header>
      <main style={{ display: 'flex' }}>
        
          <div>
            <div>
              <h1>Luiz Gabriel</h1>
              <p>Mobile developer react native</p>
            </div>

            <section className="mt-8">
          <p className="text-lg font-medium text-gray-400">
            Here are some of the projects I’m most proud of!
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            {projects.map((project) => (
              <button
                key={project.id}
                
                className={styles.button}
              >
                <span className="text-xl">{project.icon}</span>
                <span className="text-lg font-semibold">{project.name}</span>
              </button>
            ))}
          </div>
            </section>
            
          </div>
          <Image
          src="/iphone.png"
          alt="Description of the image"
          width={350}
          height={600}
          />
      
      </main>
    </div>
  );
}