import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome {user?.name}
      </h1>
    </div>
  );
}
