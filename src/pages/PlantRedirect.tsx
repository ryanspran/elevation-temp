import { useParams, Navigate } from "react-router-dom";
import { usePlantRedirect } from "@/hooks/usePlant";

/** Redirects old /plant-guide/:id URLs to /plants/:slug */
const PlantRedirect = () => {
  const { id } = useParams();
  const numericId = id ? parseInt(id, 10) : undefined;
  const { data, isLoading } = usePlantRedirect(numericId);

  if (isLoading) return null;
  if (data?.slug) return <Navigate to={`/plants/${data.slug}`} replace />;
  return <Navigate to="/plant-guide" replace />;
};

export default PlantRedirect;
