## S1.E1

# How to use NextJS image component to speed up your website 2.5x times

## Tips & Tricks

If you are using NextJS, you don't need to prepare and maintain the images upfront as we did for [S1.E1](https://github.com/andreibarabas/achieving-100ms/tree/S01.E01-before). Just use their `Image` component with the `layout="responsive"` prop.

```
import Image from "next/image";

...

<Image
    src={WomanPicture}
    layout="responsive" //don't forget this attribute
    />
```

[See code](https://github.com/andreibarabas/achieving-100ms/compare/S01.E02-before...S01.E02-after)

# Benchmarks

| Before optimization                                                                                                                                 | After optimization                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Demo](https://achieving-100ms-git-s01e02-before-andreibarabas.vercel.app)                                                                          | [Demo](https://achieving-100ms-git-s01e02-after-andreibarabas.vercel.app)                                                                          |
| Time to Interactive: `4.2s`                                                                                                                         | Time to Interactive: `1.5s (~2.8x speed increase)`                                                                                                 |
| ![Before](results/before.png)                                                                                                                       | ![After](results/after.png)                                                                                                                        |
| [See more](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fachieving-100ms-git-s01e02-before-andreibarabas.vercel.app%2F) | [See more](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fachieving-100ms-git-s01e02-after-andreibarabas.vercel.app%2F) |
