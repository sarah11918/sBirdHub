export default function Sighting(sighting) {
  if (sighting.comName == null){
      return `
    <div class="sighting">
      <div> 
        <span class="gray">${sighting.loc.locName}</span>
      </div>
      <div>
        <div class="gray">
          ${sighting.userDisplayName} saw ${sighting.numSpecies} species(s)
          <div>${sighting.obsDt} at ${sighting.obsTime}</div>
          </br>
        </div>
      </div>
    </div>
  `;  
  } else {
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
}