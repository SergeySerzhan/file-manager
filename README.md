# file-manager

Run notes:
## Navigation and working directory
1. cd path_to_directory
   1. path_to_directory can be absolute or relative(SHOULD STARTS WITH . or ..)
   2. path_to_directory may contain spaces
## Basic operations with files
2. cat path_to_file
   1. path_to_directory can be absolute or relative(SHOULD STARTS WITH . or ..)
   2. path_to_directory may contain spaces
3. add filename
   1. filename SHOULD NOT STARTS WITH '.', '/', '\' and characters forbidden by windows name convention
4. rn path_to_file new_filename
   1. path_to_file SHOULD NOT CONTAIN spaces
   2. path_to_file can be absolute or relative(SHOULD STARTS WITH . or ..)
   3. new_filename SHOULD NOT STARTS WITH '.', '/', '\' and characters forbidden by windows name convention
5. cp path_to_file path_to_new_directory
   1. path_to_file and path_to_new_directory SHOULD NOT CONTAIN spaces
   2. path_to_file and path_to_new_directory can be absolute or relative(SHOULD STARTS WITH . or ..)
6. mv path_to_file path_to_new_directory
    1. path_to_file and path_to_new_directory SHOULD NOT CONTAIN spaces
    2. path_to_file and path_to_new_directory can be absolute or relative(SHOULD STARTS WITH . or ..)
7. rm path_to_file
   1. path_to_file and path_to_new_directory can be absolute or relative(SHOULD STARTS WITH . or ..)
   2. path_to_file may contain spaces
## Hash calculations
8. hash path_to_file
   1. path_to_file and path_to_new_directory can be absolute or relative(SHOULD STARTS WITH . or ..)
   2. path_to_file may contain spaces
## Compress and decompress operations
path SHOULD NOT CONTAIN spaces
path can be absolute or relative(SHOULD STARTS WITH . or ..)
