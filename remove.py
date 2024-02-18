from importlib import metadata

for distribution in metadata.distributions():
  print(f'{distribution.name = }')

  if distribution.name is None:
    print(f'found broken distribution at {distribution._path}')