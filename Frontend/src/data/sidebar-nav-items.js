export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">dashboard</i>',
      htmlAfter: ""
    },
    {
      title: "Devices",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/#",
    },
    {
      title: "Applications",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/#",
    },
    {
      title: "Productivity",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/#",
    },
    {
      title: "Alerts",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/#",
    },
    {
      title: "Settings",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/#",
    },
  ];
}
