Hero montage — bagel cooking/baking process photos
===================================================

The landing page (Bagels/home tab) shows a full-bleed montage that
cross-fades through six shots of the bagel-making process. Drop your
own photos in here, named exactly:

  images/process-1.jpg   → Mixing the dough
  images/process-2.jpg   → Hand-rolling every bagel
  images/process-3.jpg   → Into the boiling kettle
  images/process-4.jpg   → Seeds & everything
  images/process-5.jpg   → Baked golden brown
  images/process-6.jpg   → Fresh from the oven

Tips:
- Landscape shots work best (they're cropped to fill the hero).
- ~1600px wide is plenty; compress so each is well under ~500 KB.
- .jpg is expected. To use .png/.webp instead, update the
  style="--img:url('images/process-1.jpg')" paths in index.html.

Until you add these files, each slide falls back to a warm gradient
in a different tone, so the montage still looks finished — it just
gets much better with real photos.

The captions ("Mixing the dough", etc.) live in js/script.js in the
`captions` array of the hero-montage block if you want to reword them.
