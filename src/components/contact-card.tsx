interface ContactCardProps {
    icon: React.ReactNode;
    link: string;
}

export function ContactCard({ icon, link }: ContactCardProps) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center"
      >
        <div className="mb-4">{icon}</div>
      </a>
    );
  }
  