export interface TabProps {
  bgColor: string;
  children: React.ReactNode
}
export const PinkTag: React.FC<TabProps> = ({ children }) =>  <div className="bg-yellow-300 px-4 h-6 rounded-full min-w-16 flex justify-center align-center leading-6 text-sm font-semibold text-yellow-700">{children}</div>
