export const initialData = {
  categories: [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          type: "donut",
          data: [
            { label: "Connected", value: 2, color: "#3B82F6" },
            { label: "Not Connected", value: 2, color: "#93C5FD" }
          ]
        },
        {
          id: "cloud-risk",
          name: "Cloud Account Risk Assessment",
          type: "donut",
          data: [
            { label: "Failed", value: 1689, color: "#DC2626" },
            { label: "Warning", value: 681, color: "#F59E0B" },
            { label: "Not Available", value: 36, color: "#9CA3AF" },
            { label: "Passed", value: 7253, color: "#16A34A" }
          ]
        }
      ]
    },
    {
      id: "cwpp",
      name: "CWPP Dashboard",
      widgets: [
        { id: "namespace-alerts", name: "Top 5 Namespace Specific Alerts", type: "empty" },
        { id: "workload-alerts", name: "Workload Alerts", type: "empty" }
      ]
    },
    {
      id: "registry",
      name: "Registry Scan",
      widgets: [
        {
          id: "image-risk",
          name: "Image Risk Assessment",
          type: "bar",
          data: [
            { label: "Critical", value: 9, color: "#B91C1C" },
            { label: "High", value: 150, color: "#DC2626" },
            { label: "Medium", value: 400, color: "#F59E0B" },
            { label: "Low", value: 911, color: "#FBBF24" }
          ]
        },
        {
          id: "image-security",
          name: "Image Security Issues",
          type: "bar",
          data: [
            { label: "Critical", value: 2, color: "#B91C1C" },
            { label: "High", value: 2, color: "#DC2626" },
            { label: "Medium", value: 3, color: "#F59E0B" },
            { label: "Low", value: 4, color: "#FBBF24" }
          ]
        }
      ]
    }
  ]
}
