import CommonPage from "../layout/CommonPage/index"

export default function componentName() {
  return (
      <CommonPage 
        title="Projects" 
        btnTitle="Add New Project"
        page="project"
        header={["blankIndex","p_da", "p_edd", "p_name","p_client", "p_status","p_desc","p_created_at","p_assign_to"]}

      body={[
      {
        p_da:"11/08/2019",
        p_edd:"11/10/2019",
        p_name: "Lulia Lulia",
        p_client: "Lio Marshall",
        p_status : "InProgress",
        p_desc: "Hello, what you are soing to the summary...",
        p_created_at: "09/12/5321",
        p_assign_to: "Mohan Jay",
      },
      {
        p_da:"11/08/2019",
        p_edd:"11/10/2019",
        p_name: "Lulia Lulia",
        p_client: "Lio Marshall",
        p_status : "InProgress",
        p_desc: "Hello, what you are soing to the summary...",
        p_created_at: "09/12/5321",
        p_assign_to: "Mohan Jay",
      }
   ]}

      buttons={[
        "editBtn",
        "deleteBtn",
        "detailBtn"
      ]}
      />
  );
}
