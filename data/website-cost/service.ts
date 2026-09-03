import { 
  FileCode, 
  Globe, 
  Building2, 
  UserCheck, 
  ShoppingCart, 
  Layout, 
  Server, 
  Mail, 
  LucideIcon 
} from "lucide-react";

export type CostItem = {
  title: string;
  Price: number;
  icon: LucideIcon;
  color: {
    bg: string;
    border: string;
    text: string;
    darkBg: string;
    darkBorder: string;
    darkText: string;
  };
};

export const Cost: CostItem[] = [
  {
    title: 'Static/Information',
    Price: 5000,
    icon: FileCode,
    color: {
      bg: 'bg-blue-50/60',
      border: 'border-blue-200',
      text: 'text-blue-600',
      darkBg: 'dark:bg-blue-950/30',
      darkBorder: 'dark:border-blue-800/60',
      darkText: 'dark:text-blue-400'
    }
  },
  {
    title: 'Dynamic Website',
    Price: 8000,
    icon: Globe,
    color: {
      bg: 'bg-indigo-50/60',
      border: 'border-indigo-200',
      text: 'text-indigo-600',
      darkBg: 'dark:bg-indigo-950/30',
      darkBorder: 'dark:border-indigo-800/60',
      darkText: 'dark:text-indigo-400'
    }
  },
  {
    title: 'Corporate Website',
    Price: 25000,
    icon: Building2,
    color: {
      bg: 'bg-purple-50/60',
      border: 'border-purple-200',
      text: 'text-purple-600',
      darkBg: 'dark:bg-purple-950/30',
      darkBorder: 'dark:border-purple-800/60',
      darkText: 'dark:text-purple-400'
    }
  },
  {
    title: 'Portfolio Website',
    Price: 8000,
    icon: UserCheck,
    color: {
      bg: 'bg-emerald-50/60',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      darkBg: 'dark:bg-emerald-950/30',
      darkBorder: 'dark:border-emerald-800/60',
      darkText: 'dark:text-emerald-400'
    }
  },
  {
    title: 'Ecommerce',
    Price: 25000,
    icon: ShoppingCart,
    color: {
      bg: 'bg-amber-50/60',
      border: 'border-amber-200',
      text: 'text-amber-600',
      darkBg: 'dark:bg-amber-950/30',
      darkBorder: 'dark:border-amber-800/60',
      darkText: 'dark:text-amber-400'
    }
  },
  {
    title: 'Wordpress',
    Price: 12000,
    icon: Layout,
    color: {
      bg: 'bg-cyan-50/60',
      border: 'border-cyan-200',
      text: 'text-cyan-600',
      darkBg: 'dark:bg-cyan-950/30',
      darkBorder: 'dark:border-cyan-800/60',
      darkText: 'dark:text-cyan-400'
    }
  }
];

export const OtherService: CostItem[] = [
  {
    title: 'Domain',
    Price: 2000,
    icon: Globe,
    color: {
      bg: 'bg-sky-50/60',
      border: 'border-sky-200',
      text: 'text-sky-600',
      darkBg: 'dark:bg-sky-950/30',
      darkBorder: 'dark:border-sky-800/60',
      darkText: 'dark:text-sky-400'
    }
  },
  {
    title: 'Hosting',
    Price: 4000,
    icon: Server,
    color: {
      bg: 'bg-violet-50/60',
      border: 'border-violet-200',
      text: 'text-violet-600',
      darkBg: 'dark:bg-violet-950/30',
      darkBorder: 'dark:border-violet-800/60',
      darkText: 'dark:text-violet-400'
    }
  },
  {
    title: 'Official Email Ids',
    Price: 4500,
    icon: Mail,
    color: {
      bg: 'bg-rose-50/60',
      border: 'border-rose-200',
      text: 'text-rose-600',
      darkBg: 'dark:bg-rose-950/30',
      darkBorder: 'dark:border-rose-800/60',
      darkText: 'dark:text-rose-400'
    }
  }
];