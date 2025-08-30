
export function randomizeRotation(){

const steps = ((360 + 40) - 320) % 360 / 5 + 1; // number of steps
const randStep = Math.floor(Math.random() * steps);
const angle = (340 + randStep * 5) % 360;
    // let rotation = Math.floor(Math.random() * 41) +340;

    // if(rotation > 360) rotation -= 360; 
    return angle;
}
  



const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-orange-400'];

export const randomizeColors = ()=>{
    let i = Math.floor(Math.random() * 6);

    return colors[i];
}

export const notes = [
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
    {
      name: 'Mike',
      content: 'Sometimes even family shares wrong info. It causes fights at home.',
      color: randomizeColors(),
      rotation: randomizeRotation(),
    },
  ]