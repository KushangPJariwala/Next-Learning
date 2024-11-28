import React from "react";

type Props = {
  params: {
    slug: string[];
  };
};

export default function Docs({ params }: Props) {
  console.log("params", params);
  if (params.slug?.length === 1) {
    return <div>This is doc : {params.slug[0]}</div>;
  }
  if (params.slug?.length === 2) {
    return <div>This is feature : {params.slug[1]} of doc : {params.slug[0]}</div>;
  }
  return <div>Doc</div>;
}
