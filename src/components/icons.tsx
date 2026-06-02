// Centralized icon set , drop-in replacements for the lucide-react icons
// previously used across the site. Each export wraps a Hugeicons stroke icon
// so existing JSX (<Icon className="h-4 w-4" />) keeps working unchanged.
import { HugeiconsIcon, type HugeiconsIconProps, type IconSvgElement } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  ArrowDown01Icon,
  ArrowLeft01Icon,
  BookOpen01Icon,
  UserGroupIcon,
  GlobalIcon,
  QuoteUpIcon,
  Mic01Icon,
  Mortarboard01Icon,
  Call02Icon,
  Mail01Icon,
  Location01Icon,
  Message01Icon,
  Briefcase01Icon,
  Search01Icon,
  Cancel01Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Menu01Icon,
  Facebook01Icon,
  Linkedin01Icon,
  InstagramIcon,
  File01Icon,
  BulbIcon,
  HandshakeIcon,
  MessageMultiple01Icon,
  Calendar01Icon,
  ConnectIcon,
  LibraryIcon,
  NewsIcon,
  NewTwitterIcon,
} from "@hugeicons/core-free-icons";

type IconProps = Omit<HugeiconsProps, "icon">;
type IconSvg = HugeiconsProps["icon"];

const make = (icon: IconSvg | undefined) => {
  const C = (props: IconProps) => <HugeiconsIcon icon={icon as IconSvg} {...props} />;
  return C;
};

// Drop-in replacements (same identifiers as the lucide-react icons they replace)
export const ArrowRight = make(ArrowRight01Icon);
export const ArrowDown = make(ArrowDown01Icon);
export const ArrowLeft = make(ArrowLeft01Icon);
export const BookOpen = make(BookOpen01Icon);
export const Users = make(UserGroupIcon);
export const Globe2 = make(GlobalIcon);
export const Quote = make(QuoteUpIcon);
export const Mic = make(Mic01Icon);
export const GraduationCap = make(Mortarboard01Icon);
export const Phone = make(Call02Icon);
export const Mail = make(Mail01Icon);
export const MapPin = make(Location01Icon);
export const MessageCircle = make(Message01Icon);
export const Briefcase = make(Briefcase01Icon);
export const Search = make(Search01Icon);
export const X = make(Cancel01Icon);
export const ChevronLeft = make(ChevronLeftIcon);
export const ChevronRight = make(ChevronRightIcon);
export const Menu = make(Menu01Icon);
export const Facebook = make(Facebook01Icon);
export const Linkedin = make(Linkedin01Icon);
export const Instagram = make(InstagramIcon);
export const FileText = make(File01Icon);
export const Lightbulb = make(BulbIcon);
export const Handshake = make(HandshakeIcon);
export const MessageSquare = make(MessageMultiple01Icon);
export const Calendar = make(Calendar01Icon);
export const Network = make(ConnectIcon);
export const Library = make(LibraryIcon);
export const Newspaper = make(NewsIcon);
export const Twitter = make(NewTwitterIcon);
