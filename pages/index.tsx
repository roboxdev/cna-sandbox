import type { NextPage } from 'next'
import {useEvent} from "effector-react/ssr";
import {dummyFx as _dummyFx} from "../models/root";
import {useEffect} from "react";

const Home: NextPage = () => {
  const dummyFx = useEvent(_dummyFx);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      void dummyFx();
    }
  }, [dummyFx]);
  return (
    <div>
      Hello
    </div>
  )
}

export default Home
