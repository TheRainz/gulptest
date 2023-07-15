Currently this project only compiles less from the Themes\Theme1\Styles folder into the Themes\Theme1\Content\css folder.

Looking to make it so less can be compiled regardless of theme name, ie Themes\\**\Styles.

So for example if a .less file is edited in Themes\Theme2\Styles folder, then updated .css should only be generated into Themes\Theme2\Content\css.

What I'm seeking is if for example Themes\Theme2\Styles\filename.less is edited, then Themes\Theme2\Content\css\filename.css is updated. If Themes\Theme3\Styles\filename.less is edited then Themes\Theme3\Content\css\filename.css is updated, and so forth. In general, if Themes\{foldername}\Styles\file.less is updated then the corresponding css file is generated as Themes\{foldername}\css\file.css where {foldername} is the folder where the less was edited.

Currently this works for Theme1 because it's hard coded in the gulpfile, but looking for the folder name to be dynamic. I tried using Themes\\**\ syntax but not sure how that would work for the destination.
