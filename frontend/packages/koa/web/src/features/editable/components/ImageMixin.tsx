import React, { useState } from 'react';
import { Container, ImageHeader, ImageInput, Item } from 'sy-core';

interface ImageMixinProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: { image: string };
  newImage: string | null;
  newImageName: string;
}

export const ImageMixin: React.FC<ImageMixinProps> = ({
  handleChange,
  formData,
  newImage,
  newImageName,
}) => {
  const [image, setImage] = useState(formData.image);
  return (
    <>
      <Container>
        {!newImage && image && (
          <ImageHeader header="Current Image" headerType="h4" src={image} mb={0} />
        )}
        {newImage ? (
          <>
            <Item xs={12} sm={6}>
              <ImageHeader header="Previous Image" headerType="h4" src={image} mb={0} />
            </Item>
            <Item xs={12} sm={6}>
              <ImageHeader header="New Image" headerType="h4" src={newImage} mb={0} />
            </Item>
          </>
        ) : null}
      </Container>
      <ImageInput
        handleChange={handleChange}
        newImage={newImage}
        newImageName={newImageName}
        dense
      />
    </>
  );
};
