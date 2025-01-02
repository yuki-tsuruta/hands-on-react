import { PageNavigation, PageHeader } from './layouts';
import { Categories } from './components/Categories';

export default function App() {
  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <PageHeader />
        <Categories />
      </div>
      <div className="min-h-screen"></div>
      <PageNavigation />
    </div>
  );
}
