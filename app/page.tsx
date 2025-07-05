import Component from "../maintenance-page"

export default function Page() {
  // Set your launch date here
  const launchDate = new Date("2025-07-06T12:00:00Z").toISOString();
  return <Component launchDate={launchDate} />
}
