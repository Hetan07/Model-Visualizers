import numpy as np
from sklearn.datasets import make_blobs

def generate_random_data(n_samples=100, n_features=2, n_clusters=3):
    X, _ = make_blobs(n_samples=n_samples, n_features=n_features, centers=n_clusters, random_state=42)
    return X.tolist()

if __name__ == "__main__":
    data = generate_random_data()
    print(data)
