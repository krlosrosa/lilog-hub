const BANNER_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCsoI2nJ6QuPl2gg4ymrefP4hQoGPUZv41QVpg35HN7O5tBfjVNK-wO-4dgZGtc3BrcGpKutyk43DzmMI2DXk-ZqEvrok_pjDssRquWPKsdefKi9JmiOUpHhWvlQj95fV-ik32s5X5bp1BMtBbwPy_-y8OK092ES-xKO5C9o1awMUNUEudnV4lMiVu7rZY7cs_DTQA-UHiUnLwvvDgw3sSK0XAeFRYzefQN9jXIc7zTJfwhyG1Ophj3XbMNEWjI0a60Uh2na2AhZV4';

export const WarehouseBanner = () => {
  return (
    <div className="group relative mt-lg h-32 w-full overflow-hidden rounded-xl shadow-md">
      <img
        src={BANNER_IMAGE_URL}
        alt="Ambiente operacional logístico com estantes organizadas e iluminação suave"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex items-center bg-gradient-to-r from-primary/80 to-transparent px-lg">
        <span className="max-w-36 font-sans text-headline-md text-primary-foreground">
          Status da Operação: Estável
        </span>
      </div>
    </div>
  );
};
