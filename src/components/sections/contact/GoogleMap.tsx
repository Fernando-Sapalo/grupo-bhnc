export default function GoogleMap() {
  const latitude = -8.873639;
  const longitude = 13.428833;

  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&z=17&output=embed`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <iframe
        src={mapUrl}
        width="100%"
        height="420"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        title="Localização do Grupo BHNC"
        className="block w-full"
      />
    </div>
  );
}