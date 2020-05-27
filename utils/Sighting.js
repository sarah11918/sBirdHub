export default function Sighting(sighting) {
  return `
    <div class="sighting">
      <div> 
        <span class="gray">${sighting.comName}</span>
      </div>
      <div>
        <div class="gray">
          ${sighting.howMany} birds at ${sighting.locName} at ${sighting.obsDt}
          |
        </div>
      </div>
    </div>
  `;  
}