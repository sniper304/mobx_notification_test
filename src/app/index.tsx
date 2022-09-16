import { rootStores } from "./stores";
import { MobXProvider } from "./providers/MobxProvider";
import { UserForm } from "./components/UserForm";
import { GreetingModal } from "./components/GreetingModal";

const App = () => {
  return (
    <MobXProvider {...rootStores}>
      <GreetingModal />
      <UserForm />
    </MobXProvider>
  );
};

export default App;
