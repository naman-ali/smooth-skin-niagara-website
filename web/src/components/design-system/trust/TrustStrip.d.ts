export interface TrustStripItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
}
export interface TrustStripProps {
  items?: TrustStripItem[];
}
