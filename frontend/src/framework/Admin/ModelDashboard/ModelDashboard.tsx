import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { ApiAxiosInstance } from "../../../lib";
import { ModelPanel } from "./components";
import { Page } from "../../Containers";
import { useLoading } from "../..";

interface ModelDashboardProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ModelDashboard: React.FC<ModelDashboardProps> = ({ setCount }) => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const { loading, startLoad, endLoad } = useLoading();

  const [ready, setReady] = useState(false);
  const [error, setError] = useState<any>(null);

  const [data, setData] = useState<any>({});
  const [type, setType] = useState<string | null>(null);
  const [recentActions, setRecentActions] = useState<any[]>([]);

  useEffect(() => {
    if (id === "messages" || id === "application") {
      setData({});
      setReady(false);
    }

    if (location.state) {
      setType(location.state.type);
    } else {
      setType(null);
    }
  }, [id, location.state]);

  useEffect(() => {
    startLoad();
    ApiAxiosInstance.get(`/get_models/${id}/`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.error);
        setReady(true);
        endLoad();
      });
    ApiAxiosInstance.get(`/recent_admin_actions/?model=${id}`)
      .then((response) => {
        setRecentActions(response.data);
        setReady(true);
        endLoad();
      })
      .catch((err) => {
        setError(err.error);
        setReady(true);
        endLoad();
      });
  }, [id]);

  if (!ready) {
    return null;
  }

  return (
    <Page error={error}>
      <ModelPanel
        apiData={data}
        setCount={setCount}
        recentActions={recentActions}
        type={type}
      />
    </Page>
  );
};

export default ModelDashboard;