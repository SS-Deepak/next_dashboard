import CommonPage from "../layout/CommonPage/index"

export default function componentName() {
  return (
      <CommonPage 
        title="Clients" 
        btnTitle="Add New Client"
        page="client"
        header={["blankIndex","cda","cname", "cemail","cphone"]}

      body={[
      {
        cda:"11/08/2019",
        cname: "Lulia Lulia",
        cemail:"test@gamil.com",
        cphone:"26348277"
      },
      {
        cda:"1/05/2022",
        cname: "Alin Lulia",
        cemail:"tes1t@gamil.com",
        cphone:"26348277"
      }
   ]}

      buttons={[
        "editBtn",
        "deleteBtn",
      ]}
      />
  );
}
