export default function Sighting(sighting) {
  return `
    <div class="sighting">
      <div> 
        <span class="gray">${sighting.comName}</span>
      </div>
      <div>
        <div class="gray">
          ${sighting.howMany} bird(s) at ${sighting.locName}
          <div>${sighting.obsDt}</div>
          </br>
        </div>
      </div>
    </div>
  `;  
}