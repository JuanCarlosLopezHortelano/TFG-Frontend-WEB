// src/pages/CreateTask/steps/Step2Location.tsx
import { useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
import { Input, Button, message } from 'antd';
import { useWizard } from '../TaskDraftContext';

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search?format=json';
const DEFAULT_CENTER: [number, number] = [40.4167, -3.70325]; // Madrid
const DEFAULT_ZOOM = 5;
const CIRCLE_RADIUS = 1000; // en metros

export default function Step2Location() {
  const { draft, setDraft } = useWizard();
  const nav = useNavigate();

  // Estado local
  const [query, setQuery] = useState(draft.location || '');
  const coords = draft.area?.coordinates as number[][] | undefined;
  const initialCenter: [number, number] | null = coords
    ? [coords[0][1], coords[0][0]]
    : null;
  const [center, setCenter] = useState<[number, number] | null>(initialCenter);
  const zoom = center ? 13 : DEFAULT_ZOOM;

  // Llama a Nominatim para geocodificar
  const onSearch = async () => {
    if (!query.trim()) return message.warning('Escribe una dirección o ciudad');
    try {
      const res = await fetch(`${NOMINATIM_URL}&q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (!data.length) return message.error('Ubicación no encontrada');
      const { lat, lon } = data[0];
      const latNum = parseFloat(lat);
      const lonNum = parseFloat(lon);
      setCenter([latNum, lonNum]);
      // Guardamos en el draft la zona (Point + radius)
      setDraft({
        ...draft,
        location: query.trim(),
        area: {
          type: 'Circle',
          coordinates: [[lonNum, latNum]],
          radius: CIRCLE_RADIUS,
        },
      });
      message.success('Zona fijada automáticamente');
    } catch (err) {
      console.error(err);
      message.error('Error al geocodificar');
    }
  };

  const next = () => {
    if (!center) return message.error('Debes fijar primero una zona');
    nav('../step-3');
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Paso 2: Zona aproximada</h2>

      {/* Campo de búsqueda */}
      <div className="flex gap-2 mb-4">
        <Input
          value={query}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
          placeholder="Escribe una dirección o ciudad"
        />
        <Button type="primary" onClick={onSearch}>
          Buscar
        </Button>
      </div>

      {/* Mapa con círculo */}
      <div style={{ height: 400, width: '100%', borderRadius: 12, overflow: 'hidden' }}>
        <MapContainer
          center={center || DEFAULT_CENTER}
          zoom={zoom}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {center && (
            <Circle
              center={center}
              radius={CIRCLE_RADIUS}
              pathOptions={{ color: '#1890ff', fillOpacity: 0.2 }}
              interactive={false}
            />
          )}
        </MapContainer>
      </div>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-6">
        <Button onClick={() => nav('../step-1')}>Atrás</Button>
        <Button type="primary" onClick={next}>Siguiente</Button>
      </div>
    </>
  );
}
