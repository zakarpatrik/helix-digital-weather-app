import React from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';

interface CoordinateInputProps {
  handleLatitudeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLongitudeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CoordinateInput = (props: CoordinateInputProps) => {
  const { handleLatitudeChange, handleLongitudeChange } = props;
  return (
    <div className='flex gap-2'>
      <div>
        <Label htmlFor='latitude'>Szélesség:</Label>
        <Input id='latitude' type='number' placeholder='Szélesség' onChange={handleLatitudeChange} />
      </div>
      <div>
        <Label htmlFor='longitude'>Hosszúság:</Label>
        <Input id='longitude' type='number' placeholder='Hosszúság' onChange={handleLongitudeChange} />
      </div>
    </div>
  )
}

export default CoordinateInput