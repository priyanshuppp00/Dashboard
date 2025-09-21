export const initialData = {
  categories: [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "w1",
          title: "Cloud Accounts",
          text: "Total connected cloud accounts across all providers",
        },
        {
          id: "w2",
          title: "Cloud Account Risk Assessment",
          text: "Risk assessment score for all connected cloud accounts",
        },
      ],
    },
    {
      id: "cwpp",
      name: "CWPP Dashboard",
      widgets: [
        {
          id: "w3",
          title: "Workload Alerts",
          text: "Critical and high severity alerts from workload protection",
        },
      ],
    },
    {
      id: "registry",
      name: "Registry Scan",
      widgets: [
        {
          id: "w4",
          title: "Image Risk Assessment",
          text: "Risk assessment for container images in registry",
        },
        {
          id: "w5",
          title: "Image Security Issues",
          text: "Security vulnerabilities found in container images",
        },
      ],
    },
  ],
  searchTerm: "",
  availableCategories: [
    { id: "cspm", name: "CSPM Executive Dashboard", checked: true },
    { id: "cwpp", name: "CWPP Dashboard", checked: true },
    { id: "registry", name: "Registry Scan", checked: true },
    { id: "tickets", name: "Ticket Dashboard", checked: false },
  ],
};
