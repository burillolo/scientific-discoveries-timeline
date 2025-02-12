import { Card, CardContent } from "@/components/ui/card";
import { Save } from "@/components/icons/save"

const plane = "plane.png";
const chat = "chat.svg";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  avatarUrl: string;
};

const CardComponent: React.FC<CardProps> = ({ title, description, imageUrl, avatarUrl }: CardProps) => (
  <Card className="p-4 shadow-lg rounded-xl">
    <CardContent>
      <div className="flex items-center gap-3 mb-3">
        <img src={avatarUrl} alt="User Avatar" className="w-10 h-10 rounded-full" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <img src={imageUrl} alt="Card Image" className="w-full h-64 object-cover rounded-lg" />
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="flex items-center mb-3">
        <svg aria-label="Me gusta" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Me gusta</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>

        <img src={chat} alt="Comment" height="20"  />
        <Save height={20}  width={20} className={"last:ml-auto"}/>
      </div>
    </CardContent>
  </Card>
);

export default CardComponent;
